import { useEffect, useMemo, useState } from "react";

const usePagination = (items = [], itemsPerPage = 10, initialPage = 1) => {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const safeItems = Array.isArray(items) ? items : [];
  const safeItemsPerPage = Math.max(1, Number(itemsPerPage) || 1);

  const totalItems = safeItems.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / safeItemsPerPage));

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }

    if (currentPage < 1) {
      setCurrentPage(1);
    }
  }, [currentPage, totalPages]);

  useEffect(() => {
    setCurrentPage(initialPage);
  }, [initialPage, itemsPerPage]);

  const paginatedItems = useMemo(() => {
    const startIndex = (currentPage - 1) * safeItemsPerPage;
    const endIndex = startIndex + safeItemsPerPage;

    return safeItems.slice(startIndex, endIndex);
  }, [safeItems, currentPage, safeItemsPerPage]);

  const goToPage = (page) => {
    const targetPage = Number(page);

    if (Number.isNaN(targetPage)) return;

    if (targetPage < 1) {
      setCurrentPage(1);
      return;
    }

    if (targetPage > totalPages) {
      setCurrentPage(totalPages);
      return;
    }

    setCurrentPage(targetPage);
  };

  const nextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const prevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const firstPage = () => {
    setCurrentPage(1);
  };

  const lastPage = () => {
    setCurrentPage(totalPages);
  };

  const canGoNext = currentPage < totalPages;
  const canGoPrev = currentPage > 1;

  return {
    currentPage,
    totalPages,
    totalItems,
    itemsPerPage: safeItemsPerPage,
    paginatedItems,
    canGoNext,
    canGoPrev,
    setCurrentPage: goToPage,
    goToPage,
    nextPage,
    prevPage,
    firstPage,
    lastPage,
  };
};

export default usePagination;

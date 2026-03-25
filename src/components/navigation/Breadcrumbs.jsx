import React, { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/Icon";

const formatSegmentLabel = (segment = "") => {
  return decodeURIComponent(segment)
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
};

const Breadcrumbs = ({
  items = null,
  className = "",
  homeLabel = "Home",
  separatorIcon = "heroicons:chevron-right",
  showHome = true,
}) => {
  const location = useLocation();

  const generatedItems = useMemo(() => {
    const pathnames = location.pathname.split("/").filter(Boolean);

    const crumbs = pathnames.map((segment, index) => {
      const to = `/${pathnames.slice(0, index + 1).join("/")}`;

      return {
        label: formatSegmentLabel(segment),
        to,
      };
    });

    return crumbs;
  }, [location.pathname]);

  const breadcrumbItems = Array.isArray(items) && items.length > 0 ? items : generatedItems;

  const finalItems = showHome ? [{ label: homeLabel, to: "/" }, ...breadcrumbItems] : breadcrumbItems;

  if (!finalItems.length) return null;

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
        {finalItems.map((item, index) => {
          const isLast = index === finalItems.length - 1;
          const label = item?.label || "";
          const to = item?.to || "#";

          return (
            <React.Fragment key={`${label}-${index}`}>
              {index > 0 && (
                <li className="flex items-center text-gray-400" aria-hidden="true">
                  <Icon icon={separatorIcon} width={16} />
                </li>
              )}

              <li className="flex items-center">
                {isLast ? (
                  <span className="font-medium text-gray-900">{label}</span>
                ) : (
                  <Link to={to} className="transition hover:text-accent">
                    {label}
                  </Link>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;

import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Icon from "@/components/ui/Icon";
import token from "@/lib/utilities";
import { ROUTE_PATHS } from "@/lib/constants";

const pageTitles = {
  [ROUTE_PATHS.ADMIN_DASHBOARD]: "Dashboard",
  [ROUTE_PATHS.ADMIN_PRODUCTS]: "Products",
  [ROUTE_PATHS.ADMIN_PRODUCT_FORM]: "Create Product",
  [ROUTE_PATHS.ADMIN_INVENTORY]: "Inventory",
  [ROUTE_PATHS.ADMIN_LOW_STOCK]: "Low Stock",
  [ROUTE_PATHS.ADMIN_STOCK_ADJUST]: "Stock Adjustment",
  [ROUTE_PATHS.ADMIN_CATEGORIES]: "Categories",
  [ROUTE_PATHS.ADMIN_CATEGORY_FORM]: "Create Category",
  [ROUTE_PATHS.ADMIN_ORDERS]: "Orders",
  [ROUTE_PATHS.ADMIN_ORDER_BOARD]: "Order Board",
  [ROUTE_PATHS.ADMIN_CUSTOMERS]: "Customers",
};

const TopbarDesktop = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = token.getUserData();

  const title = pageTitles[location.pathname] || "Admin Panel";

  return (
    <div className="hidden h-20 items-center justify-between border-b border-[#eadfd8] bg-white px-6 lg:flex">
      <div>
        <h1 className="font-primary text-2xl font-semibold text-secondary">{title}</h1>
        <p className="mt-1 text-sm text-[#84766e]">Monitor and manage your skincare ecommerce operations.</p>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => navigate(ROUTE_PATHS.HOME)}
          className="flex h-11 items-center gap-2 rounded-full border border-[#eadfd8] px-4 text-sm font-medium text-secondary transition hover:border-accent hover:text-accent"
        >
          <Icon icon="mdi:storefront-outline" width={18} />
          <span>View Store</span>
        </button>

        <div className="flex items-center gap-3 rounded-full border border-[#eadfd8] bg-primary px-4 py-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface text-secondary">
            <Icon icon="mdi:account-outline" width={20} />
          </div>
          <div className="text-left">
            <p className="text-sm font-semibold text-secondary">{user?.name || "Administrator"}</p>
            <p className="text-xs capitalize text-[#8a7b73]">{user?.role || "admin"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopbarDesktop;

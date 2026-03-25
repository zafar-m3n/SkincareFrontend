import React from "react";
import { useLocation } from "react-router-dom";
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

const TopbarMobile = ({ onMenuClick = () => {} }) => {
  const location = useLocation();
  const user = token.getUserData();

  const title = pageTitles[location.pathname] || "Admin Panel";

  return (
    <div className="flex h-18 items-center justify-between border-b border-[#eadfd8] bg-white px-4 lg:hidden">
      <button
        type="button"
        onClick={onMenuClick}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-[#eadfd8] text-secondary"
        aria-label="Open sidebar"
      >
        <Icon icon="mdi:menu" width={22} />
      </button>

      <div className="flex-1 px-3 text-center">
        <h1 className="font-primary text-lg font-semibold text-secondary">{title}</h1>
        <p className="truncate text-xs capitalize text-[#8a7b73]">{user?.role || "admin"}</p>
      </div>

      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-surface text-secondary">
        <Icon icon="mdi:account-outline" width={20} />
      </div>
    </div>
  );
};

export default TopbarMobile;

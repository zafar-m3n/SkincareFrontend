import React from "react";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "@/lib/constants";
import Button from "@/components/ui/Button";
import SidebarMenu from "./SidebarMenu";
import token from "@/lib/utilities";

const sidebarSections = [
  {
    title: "Overview",
    items: [{ label: "Dashboard", to: ROUTE_PATHS.ADMIN_DASHBOARD, icon: "mdi:view-dashboard-outline", end: true }],
  },
  {
    title: "Catalog",
    items: [
      { label: "Products", to: ROUTE_PATHS.ADMIN_PRODUCTS, icon: "mdi:package-variant-closed" },
      { label: "Categories", to: ROUTE_PATHS.ADMIN_CATEGORIES, icon: "mdi:shape-outline" },
      { label: "Inventory", to: ROUTE_PATHS.ADMIN_INVENTORY, icon: "mdi:warehouse" },
      { label: "Low Stock", to: ROUTE_PATHS.ADMIN_LOW_STOCK, icon: "mdi:alert-outline" },
      { label: "Stock Adjust", to: ROUTE_PATHS.ADMIN_STOCK_ADJUST, icon: "mdi:tune-variant" },
    ],
  },
  {
    title: "Orders",
    items: [
      { label: "Orders", to: ROUTE_PATHS.ADMIN_ORDERS, icon: "mdi:shopping-outline" },
      { label: "Order Board", to: ROUTE_PATHS.ADMIN_ORDER_BOARD, icon: "mdi:view-kanban-outline" },
    ],
  },
  {
    title: "Customers",
    items: [{ label: "Customers", to: ROUTE_PATHS.ADMIN_CUSTOMERS, icon: "mdi:account-group-outline" }],
  },
];

const Sidebar = ({ mobile = false, onClose = () => {} }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    token.logout();
    onClose();
    navigate(ROUTE_PATHS.ADMIN_LOGIN);
  };

  return (
    <aside className={`flex h-full flex-col border-r border-[#eadfd8] bg-white ${mobile ? "w-full" : "w-70"}`}>
      <div className="border-b border-[#f1e7e1] px-6 py-6">
        <div className="font-display text-3xl text-secondary">Luma Admin</div>
        <p className="mt-2 text-sm text-[#7b6e66]">Manage products, orders, customers, and inventory.</p>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-5">
        <div className="space-y-6">
          {sidebarSections.map((section) => (
            <div key={section.title}>
              <p className="mb-2 px-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9a8b82]">
                {section.title}
              </p>
              <SidebarMenu items={section.items} onNavigate={onClose} />
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-[#f1e7e1] p-4">
        <Button
          text="Logout"
          iconName="mdi:logout"
          variant="outline"
          className="rounded-xl! border-[#dac9c0]! text-secondary! hover:bg-surface!"
          onClick={handleLogout}
        />
      </div>
    </aside>
  );
};

export default Sidebar;

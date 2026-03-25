import React from "react";
import Icon from "@/components/ui/Icon";
import token from "@/lib/utilities";

const TopbarDesktop = ({ sidebarExpanded, onToggleSidebar }) => {
  const user = token.getUserData?.() || {};

  const fullName = user?.full_name || "User";
  const email = user?.email || "";

  return (
    <div
      className={`hidden md:flex items-center bg-white shadow fixed top-0 right-0 z-30 h-16 transition-[left] duration-300
      ${sidebarExpanded ? "left-64" : "left-16"}`}
    >
      {/* Menu toggle */}
      <button onClick={onToggleSidebar} className="ml-4 p-2 rounded hover:bg-gray-100" aria-label="Toggle menu">
        <Icon icon="mdi:menu" width={24} className="text-gray-700" />
      </button>

      <div className="flex-1" />

      {/* User info */}
      <div className="flex flex-col items-end mr-4 text-right">
        <span className="text-sm font-semibold text-gray-800 leading-tight">{fullName}</span>
        {email && <span className="text-xs text-gray-500 leading-tight">{email}</span>}
      </div>

      <Icon icon="mdi:account-circle" width={34} className="cursor-pointer text-gray-600 mr-4" />

      <div className="bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full mr-6 shadow">ENG</div>
    </div>
  );
};

export default TopbarDesktop;

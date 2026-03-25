import React from "react";
import { NavLink } from "react-router-dom";
import Icon from "@/components/ui/Icon";

const SidebarMenu = ({ items = [], onNavigate = () => {} }) => {
  return (
    <nav className="space-y-1">
      {items.map((item) => (
        <NavLink
          key={item.label}
          to={item.to}
          end={item.end}
          onClick={onNavigate}
          className={({ isActive }) =>
            `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
              isActive ? "bg-accent text-white shadow-sm" : "text-[#5d5047] hover:bg-[#f7f0eb] hover:text-secondary"
            }`
          }
        >
          <Icon icon={item.icon} width={18} />
          <span>{item.label}</span>
        </NavLink>
      ))}
    </nav>
  );
};

export default SidebarMenu;

import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Icon from "@/components/ui/Icon";
import token from "@/lib/utilities";

const SidebarMenu = ({ menuItems = [], isExpanded = false, onNavigate }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [openGroups, setOpenGroups] = useState({});

  const handleLogout = () => {
    token.logout?.();
    onNavigate?.(); // close drawer on mobile if provided
    navigate("/login", { replace: true });
  };

  const isPathActive = (path) => {
    if (!path) return false;
    return location.pathname === path;
  };

  const isGroupActive = (children = []) => {
    return children.some((c) => isPathActive(c.path));
  };

  const toggleGroup = (key) => {
    setOpenGroups((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <nav className="mt-4 flex-1 px-2 pb-4 overflow-y-auto">
      {menuItems.map((item, idx) => {
        const hasChildren = Array.isArray(item.children) && item.children.length > 0;
        const isActive = hasChildren ? isGroupActive(item.children) : isPathActive(item.path);

        const baseClasses = "flex items-center w-full rounded-lg transition";

        const expandedClasses = isExpanded
          ? `p-2 mb-1 ${isActive ? "bg-accent text-white font-semibold shadow" : "text-gray-700 hover:bg-accent/10"}`
          : `justify-center p-2 mb-1 ${isActive ? "bg-accent text-white shadow" : "text-gray-700 hover:bg-accent/10"}`;

        const iconColorClass = (() => {
          if (isExpanded && isActive) return "text-white";
          if (isExpanded) return "text-accent";
          return isActive ? "" : "text-accent";
        })();

        // GROUP ITEM
        if (hasChildren) {
          const groupKey = item.key || item.label || String(idx);
          const isOpen = !!openGroups[groupKey];

          return (
            <div key={idx} className="mb-1">
              <button
                type="button"
                onClick={() => {
                  if (isExpanded) toggleGroup(groupKey);
                }}
                className={`${baseClasses} ${expandedClasses}`}
                aria-label={!isExpanded ? item.label : undefined}
                title={!isExpanded ? item.label : undefined}
              >
                <Icon icon={item.icon} width={20} className={iconColorClass} />

                {isExpanded ? (
                  <>
                    <span className="ml-3 flex-1 text-left">{item.label}</span>
                    <Icon
                      icon="mdi:chevron-down"
                      width={18}
                      className={`transition-transform ${isOpen ? "rotate-180" : "rotate-0"} ${
                        isActive ? "text-white" : "text-gray-500"
                      }`}
                    />
                  </>
                ) : (
                  <span className="sr-only">{item.label}</span>
                )}
              </button>

              {isExpanded && isOpen && (
                <div className="ml-8 mt-1 space-y-1">
                  {item.children.map((child, cIdx) => {
                    const childActive = isPathActive(child.path);

                    return (
                      <Link
                        key={`${idx}-${cIdx}`}
                        to={child.path}
                        onClick={() => onNavigate?.()}
                        className={`block rounded-md px-3 py-2 text-sm transition ${
                          childActive
                            ? "text-accent font-semibold"
                            : "text-gray-600 hover:text-gray-800 hover:bg-gray-100"
                        }`}
                        aria-current={childActive ? "page" : undefined}
                      >
                        {child.label}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        }

        // LOGOUT ITEM
        if (item.action === "logout") {
          return (
            <button
              key={idx}
              onClick={handleLogout}
              className={`${baseClasses} ${expandedClasses}`}
              aria-label={!isExpanded ? item.label : undefined}
              title={!isExpanded ? item.label : undefined}
            >
              <Icon icon={item.icon} width={20} className={iconColorClass} />
              {isExpanded ? <span className="ml-3">{item.label}</span> : <span className="sr-only">{item.label}</span>}
            </button>
          );
        }

        // NORMAL LINK ITEM
        return (
          <Link
            key={idx}
            to={item.path}
            onClick={() => onNavigate?.()}
            className={`${baseClasses} ${expandedClasses}`}
            aria-current={isActive ? "page" : undefined}
            aria-label={!isExpanded ? item.label : undefined}
            title={!isExpanded ? item.label : undefined}
          >
            <Icon icon={item.icon} width={20} className={iconColorClass} />
            {isExpanded ? <span className="ml-3">{item.label}</span> : <span className="sr-only">{item.label}</span>}
          </Link>
        );
      })}
    </nav>
  );
};

export default SidebarMenu;

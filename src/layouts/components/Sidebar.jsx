import React from "react";
import SidebarMenu from "./SidebarMenu";
import logo from "@/assets/logo.png";
import favicon from "@/assets/favicon.png";
import token from "@/lib/utilities";
import useWidth from "@/hooks/useWidth";

const Sidebar = ({ menuOpen, setMenuOpen, sidebarExpanded }) => {
  const { width, breakpoints } = useWidth();
  const isDesktop = width >= breakpoints.md;

  const user = token.getUserData?.() || {};
  const role = (typeof user?.role === "string" ? user.role : user?.role?.value) || "guest";

  // Admin
  const adminItems = [
    { label: "Dashboard", icon: "mdi:view-dashboard-outline", path: "/admin/dashboard" },
    { label: "Inquiries", icon: "mdi:account-question-outline", path: "/admin/inquiries" },
    {
      label: "Reports",
      icon: "mdi:chart-bar",
      children: [
        { label: "Inquiry Reports", path: "/admin/reports/inquiries" },
        { label: "Daily Reports", path: "/admin/reports/daily" },
        { label: "Graduates Reports", path: "/admin/reports/graduates" },
      ],
    },
    {
      label: "Bulk Uploads",
      icon: "mdi:tray-arrow-up",
      children: [
        { label: "Upload Inquiries", path: "/admin/upload/inquiries" },
        { label: "Upload Event Leads", path: "/admin/upload/event-leads" },
        { label: "Upload Graduates", path: "/admin/upload/graduates" },
      ],
    },
    {
      label: "Settings",
      icon: "mdi:cog-outline",
      children: [
        { label: "Programs", path: "/admin/settings/programs" },
        { label: "Sources", path: "/admin/settings/sources" },
        { label: "Statuses", path: "/admin/settings/statuses" },
        { label: "Users", path: "/admin/settings/users" },
      ],
    },
    { label: "Activity Log", icon: "mdi:chart-timeline-variant", path: "/admin/activity-log" },
    { label: "Logout", icon: "mdi:logout", action: "logout" },
  ];

  // Manager
  const managerItems = [
    { label: "Dashboard", icon: "mdi:view-dashboard-outline", path: "/manager/dashboard" },
    { label: "Inquiries", icon: "mdi:account-question-outline", path: "/manager/inquiries" },
    {
      label: "Reports",
      icon: "mdi:chart-bar",
      children: [
        { label: "Inquiry Reports", path: "/manager/reports/inquiries" },
        { label: "Daily Reports", path: "/manager/reports/daily" },
        { label: "Graduates Reports", path: "/manager/reports/graduates" },
      ],
    },
    {
      label: "Bulk Uploads",
      icon: "mdi:tray-arrow-up",
      children: [
        { label: "Upload Inquiries", path: "/manager/upload/inquiries" },
        { label: "Upload Event Leads", path: "/manager/upload/event-leads" },
        { label: "Upload Graduates", path: "/manager/upload/graduates" },
      ],
    },
    {
      label: "Settings",
      icon: "mdi:cog-outline",
      children: [
        { label: "Programs", path: "/manager/settings/programs" },
        { label: "Sources", path: "/manager/settings/sources" },
        { label: "Statuses", path: "/manager/settings/statuses" },
        { label: "Users", path: "/manager/settings/users" },
      ],
    },
    { label: "Logout", icon: "mdi:logout", action: "logout" },
  ];

  // Marketer
  const marketerItems = [
    { label: "Dashboard", icon: "mdi:view-dashboard-outline", path: "/marketer/dashboard" },
    { label: "Inquiries", icon: "mdi:account-question-outline", path: "/marketer/inquiries" },
    { label: "Logout", icon: "mdi:logout", action: "logout" },
  ];

  let menuItems = [];
  if (role === "admin") menuItems = adminItems;
  else if (role === "manager") menuItems = managerItems;
  else if (role === "marketer") menuItems = marketerItems;
  else menuItems = [{ label: "Logout", icon: "mdi:logout", action: "logout" }];

  return (
    <>
      {/* Desktop */}
      <div
        className={`
          hidden md:flex md:fixed md:inset-y-0 md:left-0 md:z-50
          bg-white shadow-xl h-full
          ${sidebarExpanded ? "w-64" : "w-16"}
          transition-[width] duration-300 ease-in-out
          flex-col
        `}
      >
        <div className="shadow flex justify-center items-center">
          {sidebarExpanded ? (
            <img src={logo} alt="BIBM CRM Logo" className="h-16 w-auto" />
          ) : (
            <img src={favicon} alt="BIBM CRM" className="h-8 w-8 object-contain my-4" />
          )}
        </div>

        <SidebarMenu menuItems={menuItems} isExpanded={sidebarExpanded} />
      </div>

      {/* Mobile */}
      <div
        className={`
          md:hidden fixed top-0 bottom-0 left-0 z-50 w-64 bg-white shadow-xl
          transform transition-transform duration-300 ease-in-out
          ${menuOpen ? "translate-x-0" : "-translate-x-64"}
        `}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <img src={logo} alt="BIBM CRM Logo" className="h-8 w-auto" />
          <button onClick={() => setMenuOpen(false)} className="rounded p-2 hover:bg-gray-100" aria-label="Close menu">
            ✕
          </button>
        </div>

        <SidebarMenu menuItems={menuItems} isExpanded onNavigate={() => setMenuOpen(false)} />
      </div>
    </>
  );
};

export default Sidebar;

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import TopbarDesktop from "./components/TopbarDesktop";
import TopbarMobile from "./components/TopbarMobile";

const SIDEBAR_KEY = "bcrm_sidebar_expanded";

const DefaultLayout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false); // mobile drawer
  const [sidebarExpanded, setSidebarExpanded] = useState(() => {
    // ✅ read once (prevents reset on navigation)
    const stored = localStorage.getItem(SIDEBAR_KEY);
    return stored === "true";
  });

  useLocation(); // keep route awareness if needed later (does NOT touch sidebar state)

  // ✅ persist on every change
  useEffect(() => {
    localStorage.setItem(SIDEBAR_KEY, String(sidebarExpanded));
  }, [sidebarExpanded]);

  const desktopPadding = sidebarExpanded ? "md:pl-64" : "md:pl-16";

  return (
    <div className="font-dm-sans flex h-screen bg-white overflow-hidden relative">
      <Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen} sidebarExpanded={sidebarExpanded} />

      {/* Mobile backdrop */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Main content */}
      <div className={`flex-1 flex flex-col h-full ${desktopPadding} transition-[padding] duration-300`}>
        <TopbarDesktop sidebarExpanded={sidebarExpanded} onToggleSidebar={() => setSidebarExpanded((prev) => !prev)} />

        <TopbarMobile setMenuOpen={setMenuOpen} />

        <main className="mt-16 px-4 md:px-6 overflow-y-auto flex-1 py-10 text-black app-scrollbar">{children}</main>
      </div>
    </div>
  );
};

export default DefaultLayout;

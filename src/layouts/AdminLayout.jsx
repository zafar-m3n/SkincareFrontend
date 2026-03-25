import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import TopbarDesktop from "./components/TopbarDesktop";
import TopbarMobile from "./components/TopbarMobile";

const AdminLayout = ({ children }) => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#fcf8f5] text-secondary">
      <div className="flex min-h-screen">
        <div className="hidden lg:block">
          <Sidebar />
        </div>

        <div className="flex min-w-0 flex-1 flex-col">
          <TopbarDesktop />
          <TopbarMobile onMenuClick={() => setMobileSidebarOpen(true)} />

          <main className="flex-1 p-4 sm:p-6">{children}</main>
        </div>
      </div>

      {mobileSidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileSidebarOpen(false)} />
          <div className="absolute left-0 top-0 h-full w-[88%] max-w-[320px] bg-white shadow-xl">
            <Sidebar mobile onClose={() => setMobileSidebarOpen(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminLayout;

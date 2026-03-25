import React from "react";
import { Link } from "react-router-dom";
import { ROUTE_PATHS } from "@/lib/constants";

const AuthLayout = ({ children }) => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-primary">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(199,143,123,0.18),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(244,236,231,0.95),transparent_28%)]" />

      <div className="relative z-10 flex min-h-screen flex-col">
        <div className="px-4 pt-6 sm:px-6 lg:px-8">
          <Link to={ROUTE_PATHS.HOME} className="inline-block">
            <span className="font-display text-3xl text-secondary">Luma Skin</span>
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
          <div className="w-full max-w-md rounded-[28px] border border-[#eadfd8] bg-white p-6 shadow-[0_20px_60px_rgba(34,31,28,0.07)] sm:p-8">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;

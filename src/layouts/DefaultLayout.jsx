import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const DefaultLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-primary text-secondary">
      <Navbar />

      <main className="min-h-[calc(100vh-72px)]">{children}</main>

      <Footer />
    </div>
  );
};

export default DefaultLayout;

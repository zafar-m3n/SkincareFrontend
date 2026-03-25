import React from "react";

const Heading = ({ children, className = "", accented = false }) => {
  return (
    <h1 className={`text-2xl font-bold ${accented ? "text-accent" : "text-gray-800"} ${className}`}>{children}</h1>
  );
};

export default Heading;

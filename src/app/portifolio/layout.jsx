import React from "react";

const PortifolioLayout = ({ children }) => {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-7xl font-black">Our Works</h1>
      {children}
    </div>
  );
};

export default PortifolioLayout;

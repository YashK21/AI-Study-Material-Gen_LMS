import React from "react";
import {
  DashboardHeader,
  DashboardSidebar,
  WelcomeBanner,
} from "./_components/index.js";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <div className="md:w-64 hidden md:block fixed">
        <DashboardSidebar />
      </div>
      <div className="md:ml-64">
        <DashboardHeader />
        <div className="p-5">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;

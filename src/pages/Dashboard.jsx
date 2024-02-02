import React from "react";
import PageBanner from "../components/pages/PageBanner";
import DashboardOrdersTable from "../layouts/dashboard/DashboardOrdersTable";
import DashboardProfileSection from "../layouts/dashboard/DashboardProfileSection";
import DashboardHelp from "../layouts/dashboard/DashboardHelp";

function Dashboard() {
  return (
    <>
      <div className="container py-3">
        <PageBanner name="Dashboard" />
        <DashboardHelp />
        <DashboardProfileSection />
        <DashboardOrdersTable />
      </div>
    </>
  );
}

export default Dashboard;

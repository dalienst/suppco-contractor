import React from "react";
import PageBanner from "../components/pages/PageBanner";
import DashboardOrdersTable from "../layouts/DashboardOrdersTable";
import DashboardProfileSection from "../layouts/DashboardProfileSection";

function Dashboard() {
  return (
    <>
      <div className="container py-3">
        <PageBanner name="Dashboard" />
        <DashboardProfileSection />
        <DashboardOrdersTable />
      </div>
    </>
  );
}

export default Dashboard;

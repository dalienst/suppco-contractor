import React from "react";
import PageBanner from "../components/pages/PageBanner";
import SitesDisplay from "../layouts/sites/SitesDisplay";

function Sites() {
  return (
    <>
      <div className="container py-3">
        <PageBanner name="Sites" />
        <SitesDisplay />
      </div>
    </>
  );
}

export default Sites;

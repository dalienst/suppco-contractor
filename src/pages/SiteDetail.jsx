import React from "react";
import { useParams } from "react-router-dom";
import { siteData } from "../data/SiteData";
import PageBanner from "../components/pages/PageBanner";

function SiteDetail() {
  const { siteId } = useParams();

  const selectedSiteId = parseInt(siteId);
  const selectedSite = siteData.find((site) => site.id === selectedSiteId);

  if (!selectedSite) {
    return <div>Site not found</div>;
  }
  return (
    <>
      <div className="container py-3">
        <PageBanner name={selectedSite.name} />

        <section className="mb-3">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title fw-bold">{selectedSite.name}</h4>
              <p className="card-text">{selectedSite.description}</p>
              <p className="card-text">
                <strong>Location: </strong>
                {selectedSite.address}
              </p>
              <p className="card-text">
                <strong>Contact: </strong>
                {selectedSite.phone}
              </p>
              <p className="card-text">
                <strong>Employees: </strong>
                {selectedSite.employees}
              </p>
            </div>
          </div>
        </section>


        
      </div>
    </>
  );
}

export default SiteDetail;

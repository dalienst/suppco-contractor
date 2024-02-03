import React from "react";
import { siteData } from "../../data/SiteData";
import { Link } from "react-router-dom";

function SitesDisplay() {
  return (
    <>
      <section className="mb-3">
        <div className="row">
          {siteData.map((item, index) => (
            <>
              <div className="col-md-6 col-sm-12 mb-3 h-100">
                <div className="card">
                  <div className="card-header">
                    <h5 className="fw-bold">{item.name}</h5>
                  </div>
                  <div className="card-body">
                    <p className="card-title fw-semibold">{item.description}</p>
                    <p className="card-text">
                      <strong>Location: </strong>
                      {item.address}
                    </p>
                    <p className="card-text">
                      <strong>Contact: </strong>
                      {item.phone}
                    </p>
                    <p className="card-text">
                      <strong>Employees: </strong>
                      {item.employees}
                    </p>
                  </div>
                  <div className="card-footer">
                    <Link
                      to={`/sites/${item.id}/detail`}
                      className="btn btn-primary"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </section>
    </>
  );
}

export default SitesDisplay;

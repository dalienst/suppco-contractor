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
              <div className="col-md-4 col-sm-12 mb-3 h-100">
                <div className="card">
                  <img src={item.image} alt="" className="card-img-top cardImage" />

                  <div className="card-body">
                    <p className="card-title fw-semibold">{item.name}</p>
                    <p className="card-text">{item.description}</p>
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

import React from "react";
import PageBanner from "../components/pages/PageBanner";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <div className="container">
        <PageBanner name="Dashboard" />

        <div className="card bg-dark-subtle">
          <div className="card-body">
            <div className="row">
              <div className="col-md-6 col-sm-12 mb-3">
                <div className="card">
                  <div className="card-header bg-white">
                    <h5 className="fw-bold">User Profile</h5>
                  </div>
                  <div className="card-body">
                    <p className="card-title fw-semibold">Sheldon Cooper</p>
                    <p className="card-text">scooper@mail.com</p>
                    <p className="card-text">0712345678</p>
                    <p className="card-text">Mombasa</p>
                  </div>
                  <div className="card-footer">
                    <Link className="btn btn-primary">Update</Link>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-sm-12 mb-3">
                <div className="card">
                  <div className="card-header">
                    <h5 className="fw-bold">Company Profile</h5>
                  </div>
                  <div className="card-body">
                    <p className="card-title fw-semibold">
                      Scooper Contractors
                    </p>
                    <p className="card-text">scoopercontractors@mail.com</p>
                    <p className="card-text">0712345678</p>
                    <p className="card-text">Mombasa</p>
                  </div>
                  <div className="card-footer">
                    <Link className="btn btn-primary">Update</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;

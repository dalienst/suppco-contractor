import React from "react";
import PageBanner from "../components/pages/PageBanner";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <div className="container">
        <PageBanner name="Dashboard" />

        <section className="mb-3">
          <h3 className="fw-bold">Details</h3>
          <hr />
          <div className="card bg-primary-subtle shadow">
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
                    <div className="card-footer bg-white">
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
        </section>

        <section className="mb-3 py-3">
          <div className="d-flex flex-md-row flex-column justify-content-between">
            <div>
              <h3 className="fw-bold me-2">Orders</h3>
            </div>
            <div>
              <form role="search" className="d-flex">
                <input
                  type="search"
                  placeholder="Search"
                  className="form-control border-primary me-2"
                />
                <button className="btn btn-primary" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
          <hr />

          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product</th>
                  <th>Supplier Name</th>
                  <th>Supplier Company</th>
                  <th>Date</th>
                </tr>
              </thead>
            </table>
          </div>
        </section>
      </div>
    </>
  );
}

export default Dashboard;

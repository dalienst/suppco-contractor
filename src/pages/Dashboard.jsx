import React from "react";
import PageBanner from "../components/pages/PageBanner";
import { Link } from "react-router-dom";
import { dummyConstructionData } from "../data/OrdersData";

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
            <div className="mb-2">
              <h3 className="fw-bold me-2">Orders</h3>
            </div>

            {/* creating filters for the table */}
            <div className="mb-3 d-flex">
              <button className="btn mx-1 btn-sm btn-success">
                <i className="bi bi-hourglass-bottom fst-normal">Completed</i>
              </button>
              <button className="btn mx-1 btn-sm btn-warning">
                <i className="bi bi-hourglass-split fst-normal">Active</i>
              </button>
              <button className="btn mx-1 btn-sm btn-danger">
                <i className="bi bi-hourglass-top fst-normal">Pending</i>
              </button>
            </div>
            {/* end */}

            {/* Search function */}
            <div className="mb-2">
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
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {dummyConstructionData.map((item) => (
                  <>
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.product}</td>
                      <td>{item.supplierName}</td>
                      <td>{item.supplierCompany}</td>
                      <td>{item.date}</td>
                      <td>
                        {item.status === "Pending" ? (
                          <>
                            <button className="btn btn-sm btn-danger w-100">
                              <i className="bi bi-hourglass-top fst-normal">
                                Pending
                              </i>
                            </button>
                          </>
                        ) : item.status === "Active" ? (
                          <>
                            <button className="btn btn-sm btn-warning w-100">
                              <i className="bi bi-hourglass-split fst-normal">
                                Active
                              </i>
                            </button>
                          </>
                        ) : (
                          <button className="btn btn-sm btn-success w-100">
                            <i className="bi bi-hourglass-bottom fst-normal">
                              Completed
                            </i>
                          </button>
                        )}
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </>
  );
}

export default Dashboard;

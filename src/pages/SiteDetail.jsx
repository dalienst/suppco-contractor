import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { siteData } from "../data/SiteData";
import Button from "react-bootstrap/Button";
import SiteOrderModal from "../layouts/sites/SiteOrderModal";
import { publicLinks } from "../constants/links";

function SiteDetail() {
  const { siteId } = useParams();
  const [statusFilter, setStatusFilter] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedOrderId, setSelectedOrderId] = useState(null);

  const selectedSiteId = parseInt(siteId);
  const selectedSite = siteData.find((site) => site.id === selectedSiteId);

  if (!selectedSite) {
    return <div>Site not found</div>;
  }

  const siteOrders = selectedSite.orders;

  const filteredOrderData = siteOrders.filter((item) => {
    // Filter by status
    if (statusFilter && item.status !== statusFilter) {
      return false;
    }

    // Filter by search query (case-insensitive)
    if (
      searchQuery &&
      !(
        item.product.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.supplierName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.supplierCompany.toLowerCase().includes(searchQuery.toLowerCase())
      )
    ) {
      return false;
    }

    return true;
  });

  const handleFilterClick = (status) => {
    setStatusFilter(status);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Perform search based on the searchQuery state
    // You can customize this logic if needed
  };

  return (
    <>
      <div className="container py-3">
        <section>
          <div className="d-flex align-content-center justify-content-between mb-3">
            <h2 className="fw-bold ">
              <span>
                <Link
                  className="btn btn-primary btn-sm me-2"
                  to={publicLinks?.Sites}
                >
                  <i className="bi bi-box-arrow-left"></i>
                </Link>
              </span>
              {selectedSite.name}
            </h2>

            <div className="d-flex align-content-center justify-content-between">
              <div>
                <Link className="btn btn-warning me-2">Update</Link>
              </div>
              <div>
                <Link to={publicLinks.Inventory} className="btn btn-success">
                  Order
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Site information section */}
        <section className="mb-3">
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={selectedSite.image}
                  alt=""
                  className="img-fluid rounded-start"
                />
              </div>
              <div className="col-md-8">
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
            </div>
          </div>
        </section>
        <hr className="mb-3" />

        {/* Site Orders section */}
        <section className="mb-3">
          <div className="row">
            <div className="col-md-9 col-sm-12 mb-3">
              <div className="d-flex flex-md-row flex-column justify-content-between">
                <div className="mb-2">
                  <h3 className="fw-bold me-2">Orders</h3>
                </div>

                {/* creating filters for the table */}
                <div className="mb-3 d-flex">
                  <button
                    className={`btn mx-1 btn-sm ${
                      statusFilter === "Completed"
                        ? "btn-success"
                        : "btn-outline-success"
                    }`}
                    onClick={() => handleFilterClick("Completed")}
                  >
                    <i className="bi bi-hourglass-bottom fst-normal">
                      Completed
                    </i>
                  </button>
                  <button
                    className={`btn mx-1 btn-sm ${
                      statusFilter === "Active"
                        ? "btn-warning"
                        : "btn-outline-warning"
                    }`}
                    onClick={() => handleFilterClick("Active")}
                  >
                    <i className="bi bi-hourglass-split fst-normal">Active</i>
                  </button>
                  <button
                    className={`btn mx-1 btn-sm ${
                      statusFilter === "Pending"
                        ? "btn-danger"
                        : "btn-outline-danger"
                    }`}
                    onClick={() => handleFilterClick("Pending")}
                  >
                    <i className="bi bi-hourglass-top fst-normal">Pending</i>
                  </button>
                </div>
                {/* end */}

                {/* Search form */}
                <div className="mb-2">
                  <form
                    role="search"
                    className="d-flex"
                    onSubmit={handleSearchSubmit}
                  >
                    <input
                      type="search"
                      placeholder="Search"
                      className="form-control border-primary me-2"
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button className="btn btn-primary" type="submit">
                      Search
                    </button>
                  </form>
                </div>
              </div>
              <hr />

              {/* site orders table */}
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
                    {filteredOrderData.map((item, index) => (
                      <>
                        <tr key={item.id}>
                          <td>
                            <Button
                              onClick={() => {
                                setSelectedOrderId(item.id);
                              }}
                            >
                              {item.id}
                            </Button>
                          </td>

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
            </div>

            <div className="col-md-3 col-sm-12 mb-3 border-start">
              <h3 className="fw-bold">Employees</h3>
              <div className="list-group list-group-numbered">
                {selectedSite.employeeData.map((item) => (
                  <div
                    key={item.id}
                    className="list-group-item d-flex justify-content-between align-items-start"
                  >
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">{item.name}</div>
                      {item.position} <br />
                      {item.phone} <br />
                      {item.email}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {selectedOrderId && (
          <SiteOrderModal
            order={filteredOrderData.find(
              (item) => item.id === selectedOrderId
            )}
            onClose={() => {
              setSelectedOrderId(null);
            }}
          />
        )}
      </div>
    </>
  );
}

export default SiteDetail;

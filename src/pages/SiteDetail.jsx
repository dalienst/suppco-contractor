import React, { useState } from "react";
import {  useParams } from "react-router-dom";
import { siteData } from "../data/SiteData";
import PageBanner from "../components/pages/PageBanner";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function SiteDetail() {
  const { siteId } = useParams();
  const [statusFilter, setStatusFilter] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
        <PageBanner name={selectedSite.name} />

        {/* Site information section */}
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

        {/* Site Orders section */}
        <section className="mb-3">
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
                <i className="bi bi-hourglass-bottom fst-normal">Completed</i>
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
                {filteredOrderData.map((item) => (
                  <>
                    <tr key={item.id}>
                      <td>
                        <Button onClick={handleShow}>{item.id}</Button>
                      </td>

                      {/* modal */}
                      <Modal show={show} onHide={handleClose}>
                        <div className="modal-header">
                          <h5 className="modal-title">
                            {item.product}
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            onClick={handleClose}
                          ></button>
                        </div>

                        <div className="modal-body">
                          
                        </div>
                      </Modal>

                      {/* end of modal */}

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

export default SiteDetail;

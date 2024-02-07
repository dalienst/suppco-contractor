import React, { useState } from "react";
import SitesDisplay from "../layouts/sites/SitesDisplay";
import { Link } from "react-router-dom";
import { publicLinks } from "../constants/links";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { employees } from "../data/EmployeeData";

function Sites() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="container py-3">
        <section>
          <div className="d-flex align-content-center justify-content-between py-2 mb-3 border px-2 rounded bg-primary-subtle  shadow">
            <h2 className="fw-bold ">
              <span>
                <Link
                  className="btn btn-primary me-2"
                  to={publicLinks?.Dashboard}
                >
                  <i className="bi bi-box-arrow-left"></i>
                </Link>
              </span>
              Sites
            </h2>
            <div>
              <Button onClick={handleShow} className="btn btn-primary">
                New SIte
              </Button>
            </div>

            <Modal
              show={show}
              onHide={handleClose}
              dialogClassName="modal-dialog modal-dialog-scrollable"
            >
              <div className="modal-header">
                <h5 className="modal-title">Add New Site</h5>
                <button
                  className="btn-close"
                  type="button"
                  onClick={handleClose}
                ></button>
              </div>
              <div className="modal-body">
                <form action="">
                  <div className="mb-3">
                    <label htmlFor="ame" className="form-label">
                      Site Name
                    </label>
                    <input
                      type="text"
                      name="siteName"
                      className="form-control"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="siteImage" className="form-label">
                      Site Image
                    </label>
                    <input
                      type="file"
                      name="siteImage"
                      className="form-control"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="siteContact" className="form-label">
                      Site Contact
                    </label>
                    <input
                      type="text"
                      name="siteContact"
                      className="form-control"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="siteLocation" className="form-label">
                      Site Location
                    </label>
                    <input
                      type="text"
                      name="siteLocation"
                      className="form-control"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="siteEmployee" className="form-label">
                      Site Employees
                    </label>
                    <select
                      name="siteEmployee"
                      id="siteEmployee"
                      className="form-select"
                      multiple
                      size="5"
                    >
                      {employees.map((employee) => (
                        <>
                          <option value={employee.id}>{employee.name}</option>
                        </>
                      ))}
                    </select>
                  </div>

                  <div className="mb-3">
                    <button className="btn btn-primary" type="submit">
                      Submit
                    </button>
                  </div>
                </form>
              </div>

              <div className="modal-footer">
                <div className="modal-footer">
                  <button className="btn btn-secondary" onClick={handleClose}>
                    Close
                  </button>
                </div>
              </div>
            </Modal>
          </div>
        </section>

        <SitesDisplay />
      </div>
    </>
  );
}

export default Sites;

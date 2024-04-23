import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { shell } from "../data/inventory/shellEquipmentData";
import { employees } from "../data/EmployeeData";
import { siteData } from "../data/SiteData";
import Modal from "react-bootstrap/Modal";
import { publicLinks } from "../constants/links";

function AggregateOrderForm() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { shellItemId } = useParams();
  const selectedShellItemId = parseInt(shellItemId);
  const selectedItem = shell
    .flatMap((category) => category.subCategory)
    .flatMap((subCategory) => subCategory.items)
    .find((item) => item.id === selectedShellItemId);

  return (
    <>
      <div className="container py-2">
        <section>
          <h2 className="fw-bold ">
            <span>
              <Link
                className="btn btn-primary me-2"
                to={`/order/${shellItemId}/aggregate`}
              >
                <i className="bi bi-box-arrow-left"></i>
              </Link>
            </span>
            {selectedItem?.item} Order Form
          </h2>
          <p className="fst-italic">To be sent to supplier</p>
          <hr />
        </section>

        <section>
          <form>
            <h5>Contractor Input</h5>
            <div className="mb-3">
              <label htmlFor="employee" className="form-label">
                Allocate Employee
              </label>
              <select name="employee" id="employee" className="form-select">
                {employees?.map((employee) => (
                  <>
                    <option value={employee.id}>{employee.name}</option>
                  </>
                ))}
              </select>
            </div>
            <hr />

            <h6>Delivery Details</h6>
            <hr />
            <div className="row">
              <div className="col-md-4 col-sm-12">
                <div className="mb-3">
                  <label htmlFor="deliveryOption" className="form-label">
                    Delivery Option
                  </label>
                  <select name="deliveryOption" id="" className="form-select">
                    <option value="">Select an option</option>
                    <option value="supplier">Supplier</option>
                    <option value="self">Self Delivery</option>
                  </select>
                </div>
              </div>
              <div className="col-md-4 col-sm-12">
                <div className="mb-3">
                  <label htmlFor="destination" className="form-label">
                    Delivery Destination
                  </label>
                  <select name="destination" id="" className="form-select">
                    {siteData?.map((site) => (
                      <>
                        <option value={site.id}>{site?.name}</option>
                      </>
                    ))}
                  </select>
                </div>
              </div>

              <div className="col-md-4 col-sm-12">
                <div className="mb-3">
                  <label htmlFor="timeline" className="form-label">
                    Delivery Timeline
                  </label>
                  <div className="input-group">
                    <input type="number" className="form-control" />
                    <select
                      name="timeline"
                      id="timeline"
                      className="form-select"
                    >
                      <option value="days">Days</option>
                      <option value="weeks">Weeks</option>
                      <option value="months">Months</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <hr />
            <h6>Payment Details</h6>
            <p>This product has a fixed payment option</p>
            <hr />
            <div>
              <div className="row">
                <div className="col-md-4 col-sm-12">
                  <div className="mb-3">
                    <label htmlFor="price" className="form-label">
                      Product Price
                    </label>
                    <input
                      type="number"
                      name="price"
                      placeholder="1,000"
                      className="form-control"
                      disabled
                    />
                  </div>
                </div>

                <div className="col-md-4 col-sm-12">
                  <div className="mb-3">
                    <label htmlFor="deliveryCharge" className="form-label">
                      Delivery Charges
                    </label>
                    <input
                      type="number"
                      name="deliveryCharge"
                      placeholder="5,000"
                      className="form-control"
                      disabled
                    />
                  </div>
                </div>

                <div className="col-md-4 col-sm-12">
                  <div className="mb-3">
                    <label htmlFor="totalPrice" className="form-label">
                      Total Price
                    </label>
                    <input
                      type="number"
                      name="totalPrice"
                      placeholder="15,000"
                      className="form-control"
                      disabled
                    />
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <div className="d-flex align-content-center justify-content-between mb-3">
                  <div>
                    <Link
                      to={`/order/${shellItemId}/aggregate`}
                      className="btn btn-outline-danger"
                    >
                      Cancel
                    </Link>
                  </div>
                  <div>
                    <Link
                      onClick={handleShow}
                      className="btn btn-outline-success"
                    >
                      Submit
                    </Link>

                    <Modal show={show} onHide={handleClose}>
                      <div className="modal-header">
                        <h5 className="modal-title">Notification</h5>
                        <button
                          className="btn-close"
                          type="button"
                          onClick={handleClose}
                        ></button>
                      </div>
                      <div className="modal-body">
                        <p>
                          Order for {selectedItem?.item} has successfully been
                          placed. You will be notified once the supplier accepts
                          the order.
                        </p>
                      </div>
                      <div className="modal-footer">
                        <Link
                          to={publicLinks.ShellEquipment}
                          className="btn btn-sm btn-outline-success"
                        >
                          Builders Plant
                        </Link>
                      </div>
                    </Modal>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </section>
      </div>
    </>
  );
}

export default AggregateOrderForm;

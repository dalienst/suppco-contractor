import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { buildersPlant } from "../data/inventory/buidersPlant";
import Modal from "react-bootstrap/Modal";
import { publicLinks } from "../constants/links";

function BuildersPlantOrderForm() {
  const { plantId } = useParams();
  const selectedPlantId = parseInt(plantId);

  // Find the item with the selectedPlantId
  const selectedPlant = buildersPlant.find(
    (item) => item.id === selectedPlantId
  );

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="container">
        <section>
          <h2 className="fw-bold ">
            <span>
              <Link
                className="btn btn-primary me-2"
                to={`/builders-plant/${plantId}/order`}
              >
                <i className="bi bi-box-arrow-left"></i>
              </Link>
            </span>
            {selectedPlant?.title} Order Form
          </h2>
          <p className="fst-italic">To be sent to supplier</p>
          <hr />
        </section>

        <section>
          <form>
            <h6>Payment Details</h6>
            <p>This product has a negotiable payment option</p>
            <hr />
            <div className="row">
              <div className="col-md-4 col-sm-12">
                <div className="mb-3">
                  <label htmlFor="payment" className="form-label">
                    Payment
                  </label>
                  <select name="payment" id="payment" className="form-select">
                    <option value="full">Full</option>
                    <option value="partial">Negotiable</option>
                  </select>
                </div>
              </div>
              <div className="col-md-4 col-sm-12">
                <div className="mb-3">
                  <label htmlFor="payment" className="form-label">
                    Rate per hour
                  </label>
                  <input
                    type="number"
                    name="rate"
                    className="form-control"
                    placeholder={selectedPlant.ratePerHour}
                    disabled
                  />
                </div>
              </div>

              <div className="col-md-4 col-sm-12">
                <div className="mb-3">
                  <label htmlFor="payment" className="form-label">
                    Total Amount
                  </label>
                  <input
                    type="number"
                    name="rate"
                    className="form-control"
                    placeholder={selectedPlant.ratePerHour * 8}
                    disabled
                  />
                </div>
              </div>
            </div>

            <hr />

            <h6>Payment Breakdown</h6>
            <p>In the event of negotiable payment</p>
            <p>Deposit paid first</p>
            <hr />
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Payment No.</th>
                    <th>Percentage %</th>
                    <th>Amount</th>
                    <th>Balance</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>20</td>
                    <td>20000</td>
                    <td>140000</td>
                    <td>01/01/2023</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-2">
              <p className="fw-semibold">Complete the plan</p>
              <form>
                <div className="mb-3">
                  <div className="row">
                    <div className="col-md-6 col-sm-12 mb-2">
                      <label htmlFor="amount" className="form-label">
                        Enter Amount
                      </label>
                      <input type="number" className="form-control" />
                    </div>
                    <div className="col-md-6 col-sm-12 mb-2">
                      <label htmlFor="amount" className="form-label">
                        Expected Date
                      </label>
                      <input type="date" className="form-control" />
                    </div>
                  </div>
                  <button className="btn btn-sm btn-outline-primary">
                    Add Plan
                  </button>
                </div>
              </form>
            </div>
            <div className="mb-3">
              <div className="d-flex align-content-center justify-content-between mb-3">
                <div>
                  <Link
                    to={`/builders-plant/${plantId}/order`}
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
                        Order for {selectedPlant?.title} has successfully been
                        placed. You will be notified once the supplier accepts
                        the order.
                      </p>
                    </div>
                    <div className="modal-footer">
                      <Link
                        to={publicLinks.BuildersPlant}
                        className="btn btn-sm btn-outline-success"
                      >
                        Builders Plant
                      </Link>
                    </div>
                  </Modal>
                </div>
              </div>
            </div>
          </form>
        </section>
      </div>
    </>
  );
}

export default BuildersPlantOrderForm;

/* eslint-disable no-unused-vars */
import React from "react";
import Modal from "react-bootstrap/Modal";

const DashboardOrderModal = ({ onClose, order }) => {
  const productDetail = order?.productDetail?.detail;
  const paymentPlan = order?.productDetail?.paymentPlan;
  const deliveryPlan = order?.productDetail?.deliveryPlan;
  const supplierDetail = order?.supplierDetail;
  const supplierCompany = order?.supplierCompanyDetail;
  return (
    <>
      <Modal
        show={true}
        onHide={onClose}
        dialogClassName="modal-dialog modal-dialog-scrollable"
      >
        <div className="modal-header">
          <h4 className="modal-title">
            {order.id} - {order.product}
          </h4>
          <button
            type="button"
            className="btn-close"
            onClick={onClose}
          ></button>
        </div>

        <div className="modal-body">
          {/* supplier company detail */}
          <div className="mb-3">
            <h5 className="fw-semibold mb-2">Supplier Company Detail</h5>
            <hr className="mb-2" />
            <p>
              <strong>Name: </strong>
              {supplierCompany.name}
            </p>
            <p>
              <strong>Location: </strong>
              {supplierCompany.address}
            </p>
            <p>
              <strong>Contact: </strong>
              {supplierCompany.phone}
            </p>
            <hr className="mb-3" />
          </div>
          {/* end of supplier company detail */}

          {/* product detail */}
          <div className="mb-3">
            <h5 className="fw-semibold mb-2">Product Detail</h5>
            <hr className="mb-2" />
            <p>
              <strong>Category: </strong>
              {productDetail.category}
            </p>
            {productDetail?.subCategory !== "N/A" ? (
              <>
                <p>
                  <strong>Sub-category: </strong>
                  {productDetail?.subCategory}
                </p>
              </>
            ) : null}

            <p>
              <strong>Material: </strong>
              {productDetail?.material}
            </p>
            {productDetail?.rental !== "N/A" ? (
              <>
                <p>
                  <strong>Rental: </strong>
                  {productDetail.rental}
                </p>
              </>
            ) : null}

            <p>
              <strong>Quantity: </strong>
              {productDetail.quantity}
            </p>
            <hr className="mb-3" />
          </div>
          {/* end of product detail */}

          {/* delivery detail */}
          {/* <div className="mb-3">
            <h5 className="fw-semibold mb-2">Delivery Detail</h5>
            <hr className="mb-2" />
            <p>
              <strong>Option: </strong>
              {deliveryPlan?.option}
            </p>

            <p>
              <strong>Destination: </strong>
              {deliveryPlan?.destination}
            </p>

            <p>
              <strong>Pricing Method: </strong>
              {deliveryPlan?.pricing}
            </p>

            <p>
              <strong>Cost: </strong>
              {deliveryPlan.cost}
            </p>

            <hr className="mb-3" />
          </div> */}
          {/* end of delivery detail */}

          {/* payment detail */}
          <div className="mb-3">
            <h5 className="fw-semibold mb-2">Payment Detail</h5>
            <hr className="mb-2" />
            <p>
              <strong>Product Price: </strong>
              {paymentPlan?.price}
            </p>

            <p>
              <strong>Plan: </strong>
              {paymentPlan?.plan}
            </p>

            <p>
              <strong>Method: </strong>
              {paymentPlan?.method}
            </p>

            <p>
              <strong>Total: </strong>
              {paymentPlan?.total}
            </p>

            {paymentPlan?.deposit !== "N/A" ? (
              <>
                <p>
                  <strong>Deposit: </strong>
                  {paymentPlan?.deposit}
                </p>
              </>
            ) : null}
            {paymentPlan?.breakdown !== "N/A" ? (
              <>
                <strong>Payment Breakdown:</strong>
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Plan</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Percentage</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.entries(paymentPlan?.breakdown).map(
                        ([key, plan], index) => (
                          <tr key={index}>
                            <td>{key}</td>
                            <td>{plan?.amount}</td>
                            <td>{plan?.date}</td>
                            <td>{plan?.percentage}</td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
              </>
            ) : null}

            <hr className="mb-3" />
          </div>
          {/* end of delivery detail */}
        </div>
        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={onClose}>
            Close
          </button>
        </div>
      </Modal>
    </>
  );
};

export default DashboardOrderModal;

import React from "react";
import Modal from "react-bootstrap/Modal";

const InvoiceModal = ({ onClose, order }) => {
  const productDetail = order?.productDetail?.detail;
  const paymentPlan = order?.productDetail?.paymentPlan;
  const supplierDetail = order?.supplierDetail;
  const supplierCompany = order?.supplierCompanyDetail;
  return (
    <>
      <Modal
        show={true}
        onHide={onClose}
        dialogClassName="modal-dialog modal-dialog-scrollable modal-lg"
      >
        <div className="modal-header">
          <h4 className="modal-title">
            {order.id} - {order.product} Invoice
          </h4>
          <button
            type="button"
            className="btn-close"
            onClick={onClose}
          ></button>
        </div>

        <div className="modal-body">
          <div className="row mb-3">
            <div className="col-md-6 col-sm-12 mb-2">
              <h5 className="fw-bold">{supplierDetail.name}</h5>
              <p>{supplierDetail.address}</p>
              <p>{supplierDetail.phone}</p>
            </div>
            <div className="col-md-6 col-sm-12 mb-2 text-end">
              <h5 className="fw-bold">{supplierCompany.name}</h5>
              <p>{supplierCompany.address}</p>
              <p>{supplierCompany.phone}</p>
            </div>
          </div>
          <div className="table-responsive mb-3">
            <table className="table table-bordered">
              <thead className="table-info">
                <tr>
                  <th>#</th>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Unit Price</th>
                  <th>Total Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{order.id}</td>
                  <td>{order.product}</td>
                  <td>{productDetail.quantity}</td>
                  <td>{paymentPlan.price}</td>
                  <td>{paymentPlan.total}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mb-3">
            <h5 className="fw-bold">Total Price: Ksh {paymentPlan.total}</h5>
            <p>Payment Method: {paymentPlan.method}</p>
          </div>
          <p className="fst-italic text-secondary"><small>This is a system generated invoice. A copy was also sent to your email.</small></p>
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

export default InvoiceModal;

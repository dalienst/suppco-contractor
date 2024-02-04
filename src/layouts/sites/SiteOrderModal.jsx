import React from "react";
import Modal from "react-bootstrap/Modal";

const SiteOrderModal = ({ onClose, order }) => {
  return (
    <>
      <Modal show={true} onHide={onClose}>
        <div className="modal-header">
            <h5 className="modal-title">
                {order.id}
            </h5>
          <button
            type="button"
            className="btn-close"
            onClick={onClose}
          ></button>
        </div>
      </Modal>
    </>
  );
};

export default SiteOrderModal;

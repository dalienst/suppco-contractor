import React, { useState } from "react";
import SitesDisplay from "../layouts/sites/SitesDisplay";
import { Link } from "react-router-dom";
import { publicLinks } from "../constants/links";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

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

            <Modal show={show} onHide={handleClose}>
              <div className="modal-header">
                <h5 className="modal-title">Add New Site</h5>
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

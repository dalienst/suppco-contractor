import React from "react";
import { Link } from "react-router-dom";
import { publicLinks } from "../../constants/links";

function InventoryHeader() {
  return (
    <>
      <section>
        <div className="d-flex align-content-center justify-content-between mb-3">
          <div>
            <Link className="btn btn-primary me-2" to={publicLinks?.Dashboard}>
              <i className="bi bi-box-arrow-left"></i>
            </Link>
          </div>
          <div>
            <h2 className="fw-bold ">Inventory</h2>
          </div>
          <div>
            <Link className="btn btn-primary" to={publicLinks.Orders}>
              Order
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default InventoryHeader;

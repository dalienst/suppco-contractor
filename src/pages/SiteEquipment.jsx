import React from "react";
import { Link } from "react-router-dom";
import { publicLinks } from "../constants/links";

function SiteEquipment() {
  return (
    <div className="container">
      <div>
        <h2 className="fw-bold ">
          <span>
            <Link className="btn btn-primary me-2" to={publicLinks?.Inventory}>
              <i className="bi bi-box-arrow-left"></i>
            </Link>
          </span>
          Site Equipment
        </h2>
        <hr />
      </div>
    </div>
  );
}

export default SiteEquipment;

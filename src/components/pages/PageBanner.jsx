import React from "react";
import { Link } from "react-router-dom";

function PageBanner({ name, link }) {
  return (
    <>
      <h2 className="fw-bold py-3 mb-3 border px-2 rounded bg-primary-subtle  shadow">
        <span>
          <Link className="btn btn-primary me-2" to={link}>
            <i className="bi bi-box-arrow-left"></i>
          </Link>
        </span>
        {name}
      </h2>
    </>
  );
}

export default PageBanner;

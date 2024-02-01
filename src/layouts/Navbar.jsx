import React from "react";
import { Link } from "react-router-dom";
import imgAvatar from "../assets/images/canvas/avatar.jpg";
import { publicLinks } from "../constants/links";

function Navbar() {
  return (
    <>
      <nav className="navbar sticky-top border-bottom navbar-bg">
        <div className="container-fluid">
          <div className="navbar-brand">
            <button
              className="btn btn-dark btn-sm"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasScrolling"
              aria-controls="offcanvasScrolling"
            >
              <i className="bi bi-list"></i>
            </button>

            <span>
              <Link className="text-decoration-none fw-bold text-dark mx-2 h6">
                SUPPCO
              </Link>
            </span>

            {/* offcanvas */}
            <div
              className="offcanvas offcanvas-start navbar-bg"
              data-bs-scroll="true"
              data-bs-backdrop="false"
              tabIndex="-1"
              id="offcanvasScrolling"
              aria-labelledby="offcanvasScrollingLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasScrollingLabel">
                  Contractor Interface
                </h5>
                <button
                  type="button"
                  className="btn-close bg-white"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <hr className="text-dark" />

              <div className="offcanvas-body p-0">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item navbar-bg text-end border border-dark border-start-0 border-end-0">
                    <Link className="text-decoration-none fw-semibold text-dark">
                      Dashboard
                    </Link>
                  </li>

                  <li className="list-group-item navbar-bg text-end border border-dark border-start-0 border-end-0 border-top-0">
                    <Link className="text-decoration-none fw-semibold text-dark">
                      Dashboard
                    </Link>
                  </li>

                  <li className="list-group-item navbar-bg text-end border border-dark border-start-0 border-end-0 border-top-0">
                    <Link className="text-decoration-none fw-semibold text-dark">
                      Dashboard
                    </Link>
                  </li>

                  <li className="list-group-item navbar-bg text-end border border-dark border-start-0 border-end-0 border-top-0">
                    <Link className="text-decoration-none fw-semibold text-dark">
                      Dashboard
                    </Link>
                  </li>

                  <li className="list-group-item navbar-bg text-end border border-dark border-start-0 border-end-0 border-top-0">
                    <Link className="text-decoration-none fw-semibold text-dark">
                      Dashboard
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="p-2 d-flex align-items-center justify-content-between">
                <div>
                  <img src={imgAvatar} className="avatar-side" alt="" />
                </div>
                <div>
                  <Link
                    className="btn btn-danger btn-sm"
                    to={publicLinks.Login}
                  >
                    Sign Out
                  </Link>
                </div>
              </div>
            </div>
            {/* end of offcanvas */}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

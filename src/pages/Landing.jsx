import React from "react";
import landImage from "../assets/images/landing/building.svg";
import { Link } from "react-router-dom";
import { publicLinks } from "../constants/links";


function Landing() {
  return (
    <>
      <div className="container d-flex" style={{ height: "100vh" }}>
        <div className="row flex-lg-row justify-content-center align-items-center g-5 py-5">
          <div className="col-10 col-sm-12 col-lg-6">
            <img
              src={landImage}
              alt=""
              className="d-block mx-lg-auto img-fluid"
            />
          </div>

          <div className="col-lg-6">
            <h1 className="fw-bolder mb-3">Welcome to SUPPCO</h1>
            <p className="fw-semibold">Manage your construction from our site</p>
            <p className="fw-semibold">Inventory | Multiple Sites | Orders</p>
            <div className="mb-3">
              <Link to={publicLinks.Dashboard} className="btn rounded-pill navbar-bg text-white fw-semibold px-3">Get Onboard</Link>
            </div>
            <small>*This is the contractor site. Access Supplier Site <Link>here</Link></small>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;

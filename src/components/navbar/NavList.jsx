import React from "react";
import { Link } from "react-router-dom";
import { publicLinks } from "../../constants/links";

const NavList = () => {
  return (
    <>
      <div className="list-group list-group-flush border-0">
        <Link to={publicLinks.Dashboard} className="list-group-item list-group-item-action navbar-bg border border-start-0 border-end-0 border-dark text-end">
          Dashboard
        </Link>
        <Link className="list-group-item list-group-item-action navbar-bg border border-start-0 border-end-0 border-dark border-top-0 text-end">
          Sites
        </Link>
        <Link className="list-group-item list-group-item-action navbar-bg border border-start-0 border-end-0 border-dark border-top-0 text-end">
          Inventory
        </Link>
        <Link className="list-group-item list-group-item-action navbar-bg border border-start-0 border-end-0 border-dark border-top-0 text-end">
          Employees
        </Link>
      </div>
    </>
  );
};

export default NavList;

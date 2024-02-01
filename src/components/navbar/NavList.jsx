import React from "react";
import { Link } from "react-router-dom";
import { publicLinks } from "../../constants/links";

const NavList = () => {
  return (
    <>
      <div className="list-group list-group-flush border-0">
        <Link
          to={publicLinks.Dashboard}
          className="list-group-item list-group-item-action"
        >
          <i className="bi bi-speedometer2"></i> Dashboard
        </Link>
        <Link className="list-group-item list-group-item-action">
          <i className="bi bi-building"></i> Sites
        </Link>
        <Link className="list-group-item list-group-item-action">
          <i className="bi bi-list-ol"></i> Inventory
        </Link>
        <Link className="list-group-item list-group-item-action">
          <i className="bi bi-clipboard-data-fill"></i> Orders
        </Link>
        <Link className="list-group-item list-group-item-action">
          <i className="bi bi-truck"></i> Deliveries
        </Link>
        <Link className="list-group-item list-group-item-action">
          <i className="bi bi-people"></i> Employees
        </Link>
      </div>
    </>
  );
};

export default NavList;

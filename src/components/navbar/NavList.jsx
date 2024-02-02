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
        <Link
          to={publicLinks.Sites}
          className="list-group-item list-group-item-action"
        >
          <i className="bi bi-building"></i> Sites
        </Link>
        <Link
          to={publicLinks.Inventory}
          className="list-group-item list-group-item-action"
        >
          <i className="bi bi-list-ol"></i> Inventory
        </Link>
        <Link
          to={publicLinks.Orders}
          className="list-group-item list-group-item-action"
        >
          <i className="bi bi-clipboard-data-fill"></i> Orders
        </Link>
        <Link
          to={publicLinks.Delivery}
          className="list-group-item list-group-item-action"
        >
          <i className="bi bi-truck"></i> Deliveries
        </Link>
        <Link
          to={publicLinks.Employees}
          className="list-group-item list-group-item-action"
        >
          <i className="bi bi-people"></i> Employees
        </Link>
      </div>
    </>
  );
};

export default NavList;

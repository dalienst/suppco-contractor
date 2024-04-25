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
        <div className="dropdown">
          <Link
            to="#"
            className="list-group-item list-group-item-action dropdown-toggle"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="bi bi-list-ol"></i> Inventory
          </Link>
          <ul className="dropdown-menu dropdown-menu-dark">
            <li>
              <Link to={publicLinks?.SiteEquipment} className="dropdown-item">
                Site Equipment
              </Link>
            </li>
            <li>
              <Link to={publicLinks?.ShellEquipment} className="dropdown-item">
                Shell Equipment
              </Link>
            </li>
            <li>
              <Link
                to={publicLinks?.PlumbingElectricity}
                className="dropdown-item"
              >
                Plumbing & Electricity
              </Link>
            </li>
            <li>
              <Link to={publicLinks?.BuildersPlant} className="dropdown-item">
                Builder's Plant
              </Link>
            </li>
          </ul>
        </div>
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
        <Link
          to={publicLinks.Books}
          className="list-group-item list-group-item-action"
        >
          <i className="bi bi-cash-coin"></i> Books
        </Link>
      </div>
    </>
  );
};

export default NavList;

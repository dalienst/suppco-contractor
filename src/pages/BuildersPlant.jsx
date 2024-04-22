import React from "react";
import { publicLinks } from "../constants/links";
import { Link } from "react-router-dom";
import { buildersPlant } from "../data/inventory/buidersPlant";

function BuildersPlant() {
  return (
    <>
      <div className="container">
        <div>
          <h2 className="fw-bold ">
            <span>
              <Link
                className="btn btn-primary me-2"
                to={publicLinks?.Inventory}
              >
                <i className="bi bi-box-arrow-left"></i>
              </Link>
            </span>
            Builder's Plant
          </h2>
          <hr />
        </div>

        <section>
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Manufacturer</th>
                  <th>Model</th>
                  <th>Year</th>
                  <th>Weight</th>
                  <th>Lifting Height</th>
                  <th>Horsepower</th>
                  <th>Lease Type</th>
                  <th>Rate</th>
                  <th>Supplier</th>
                </tr>
              </thead>
              <tbody>
                {buildersPlant?.map((item) => (
                  <>
                    <tr key={item.id}>
                      <td>{item.title}</td>
                      <td>{item.manufacturer}</td>
                      <td>{item.model}</td>
                      <td>{item.year}</td>
                      <td>{item.weight}</td>
                      <td>{item.liftingHeight}</td>
                      <td>{item.horsepower}</td>
                      <td>{item.leaseType}</td>
                      <td>{item.ratePerHour}</td>
                      <td>{item.supplier?.name}</td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </>
  );
}

export default BuildersPlant;

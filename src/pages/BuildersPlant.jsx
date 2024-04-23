import React, { useState } from "react";
import { publicLinks } from "../constants/links";
import { Link } from "react-router-dom";
import { buildersPlant } from "../data/inventory/buidersPlant";

function BuildersPlant() {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter function to filter items based on location
  const filteredItems = buildersPlant.filter((item) =>
    item.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="container">
        <section>
          <div className="d-flex align-content-center justify-content-between mb-3">
            <Link className="btn btn-primary me-2" to={publicLinks?.Inventory}>
              <i className="bi bi-box-arrow-left"></i>
            </Link>

            <h2 className="fw-bold ">Builder's Plant</h2>

            <div className="d-flex align-content-center justify-content-between">
              <div>
                <form role="search" className="d-flex">
                  <input
                    type="search"
                    className="form-control border-primary me-2"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by location"
                  />
                </form>
              </div>
            </div>
          </div>
        </section>
        <div>
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
                  <th>Location</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredItems?.map((item) => (
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
                      <td>{item.location}</td>
                      <td>
                        <Link
                          to={`/builders-plant/${item.id}/order`}
                          className="btn btn-sm btn-outline-info"
                        >
                          Order
                        </Link>
                      </td>
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

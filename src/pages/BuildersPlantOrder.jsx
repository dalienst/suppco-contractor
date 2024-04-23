import React from "react";
import { Link, useParams } from "react-router-dom";
import { buildersPlant } from "../data/inventory/buidersPlant";
import { publicLinks } from "../constants/links";
import { siteData } from "../data/SiteData";
import { employees } from "../data/EmployeeData";

function BuildersPlantOrder() {
  const { plantId } = useParams();
  const selectedPlantId = parseInt(plantId);

  // Find the item with the selectedPlantId
  const selectedPlant = buildersPlant.find(
    (item) => item.id === selectedPlantId
  );

  return (
    <>
      <div className="container">
        <section>
          <h2 className="fw-bold ">
            <span>
              <Link
                className="btn btn-primary me-2"
                to={publicLinks?.BuildersPlant}
              >
                <i className="bi bi-box-arrow-left"></i>
              </Link>
            </span>
            {selectedPlant?.title} Order Data
          </h2>
          <hr />
        </section>

        <section>
          <form>
            <h6>Rental Details</h6>
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <div className="mb-3">
                  <label htmlFor="duration" className="form-label">
                    Rental Duration
                  </label>
                  <input
                    type="number"
                    name="duration"
                    className="form-control"
                  />
                </div>
              </div>

              <div className="col-md-6 col-sm-12">
                <label htmlFor="startdate" className="form-label">
                  Start Date
                </label>
                <input type="date" name="startdate" className="form-control" />
              </div>
            </div>

            <hr />

            <h6>Delivery Details</h6>
            <div className="mb-3">
              <label htmlFor="destination" className="form-label">
                Delivery Destination
              </label>
              <select name="destination" id="" className="form-select">
                {siteData?.map((site) => (
                  <>
                    <option value={site.id}>{site?.name}</option>
                  </>
                ))}
              </select>
            </div>

            <hr />

            <h6>Operation Conditions</h6>
            <div className="mb-3">
              <label htmlFor="condition" className="form-label">
                Describe Operating Conditions
              </label>
              <textarea
                name="condition"
                className="form-control"
                id=""
                cols="30"
                rows="3"
              ></textarea>
            </div>
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <div className="mb-3">
                  <label htmlFor="image" className="form-label">
                    Operating condition image
                  </label>
                  <input type="file" className="form-control" />
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <div className="mb-3">
                  <label htmlFor="staff" className="form-label">
                    Staff
                  </label>
                  <select name="employee" id="employee" className="form-select">
                    {employees?.map((employee) => (
                      <>
                        <option value={employee.id}>{employee.name}</option>
                      </>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="mb-3">
              <div className="d-flex align-content-center justify-content-between mb-3">
                <div>
                  <Link className="btn btn-outline-danger">Cancel</Link>
                </div>
                <div>
                  <Link
                    to={`/order-form/${plantId}/builders-plant`}
                    className="btn btn-outline-success"
                  >
                    Proceed
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </section>
      </div>
    </>
  );
}

export default BuildersPlantOrder;

import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { shell } from "../data/inventory/shellEquipmentData";
import { publicLinks } from "../constants/links";

function ShellEquipmentDetail() {
  const { shellItemId } = useParams();
  const selectedShellItemId = parseInt(shellItemId);
  const selectedItem = shell
    .flatMap((category) => category.subCategory) // Flatten the nested arrays
    .flatMap((subCategory) => subCategory.items) // Flatten the nested arrays
    .find((item) => item.id === selectedShellItemId);

  const [searchQuery, setSearchQuery] = useState("");

  const filteredLocations = selectedItem?.location?.filter((location) =>
    location.site.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="container py-2">
        <section>
          <div className="d-flex align-content-center justify-content-between mb-3">
            <div>
              <Link
                className="btn btn-primary me-2"
                to={publicLinks?.ShellEquipment}
              >
                <i className="bi bi-box-arrow-left"></i>
              </Link>
            </div>

            <div>
              <h2 className="fw-bold ">{selectedItem?.item}</h2>
            </div>

            <div className="d-flex align-content-center justify-content-between">
              <div>
                <form role="search" className="d-flex">
                  <input
                    type="search"
                    className="form-control border-primary me-2"
                    placeholder="Search by site"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </form>
              </div>

              <div>
                <Link className="btn btn-primary">Order</Link>
              </div>
            </div>
          </div>
        </section>
        <hr />

        <section>
          <div className="table-responsive mt-3">
            <table className="table table-bordered caption-top">
              <caption>{selectedItem?.item} in your possession</caption>
              <thead>
                <tr>
                  <th>Site</th>
                  <th>Density</th>
                  <th>Moisture Content</th>
                  <th>Gradiation</th>
                  <th>Size</th>
                  <th>Shape</th>
                  <th>Variation</th>
                  <th>Wood Species</th>
                  <th>Grade</th>
                  <th>Treatment</th>
                  <th>Surface Finish</th>
                  <th>Other</th>
                </tr>
              </thead>
              <tbody>
                {filteredLocations?.map((location) => (
                  <>
                    <tr key={location?.id}>
                      <td>{location.site.name}</td>
                      <td>{location.density}</td>
                      <td>{location.moistureContent}</td>
                      <td>{location.gradiation}</td>
                      <td>{location.size}</td>
                      <td>{location.shape}</td>
                      <td>{location.variation}</td>
                      <td>{location.woodSpecies}</td>
                      <td>{location.grade}</td>
                      <td>{location.treatment}</td>
                      <td>{location.surfaceFinish}</td>
                      <td>{location.other}</td>
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

export default ShellEquipmentDetail;

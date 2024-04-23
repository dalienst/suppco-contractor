import React from "react";
import { Link, useParams } from "react-router-dom";
import { shell } from "../data/inventory/shellEquipmentData";

function OrderAggregate() {
  const { shellItemId } = useParams();
  const selectedShellItemId = parseInt(shellItemId);
  const selectedItem = shell
    .flatMap((category) => category.subCategory)
    .flatMap((subCategory) => subCategory.items)
    .find((item) => item.id === selectedShellItemId);

  return (
    <>
      <div className="container py-2">
        <section>
          <h2 className="fw-bold ">
            <span>
              <Link
                className="btn btn-primary me-2"
                to={`/shell/${shellItemId}/inventory`}
              >
                <i className="bi bi-box-arrow-left"></i>
              </Link>
            </span>
            {selectedItem?.item} Order Data
          </h2>
          <hr />
        </section>
        <section>
          <form>
            <div className="mb-3">
              <label htmlFor="texture" className="form-label">
                Texture
              </label>
              <select name="texture" id="texture" className="form-select">
                <option value="fine">Fine</option>
                <option value="coarse">Coarse</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="size" className="form-label">
                Size
              </label>
              <div className="input-group">
                <input type="text" className="form-control" />
                <select name="size" id="size" className="form-select">
                  <option value="mm">Millimetres</option>
                  <option value="metres">Metres</option>
                  <option value="tonnes">Tonnes</option>
                </select>
              </div>
            </div>

            <div className="mb-3">
              <div className="d-flex align-content-center justify-content-between mb-3">
                <div>
                  <Link className="btn btn-outline-danger">Cancel</Link>
                </div>
                <div>
                  <Link
                    to={`/order-form/${shellItemId}/aggregate`}
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

export default OrderAggregate;

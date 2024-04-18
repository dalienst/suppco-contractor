import React from "react";
import { Link, useParams } from "react-router-dom";
import { shell } from "../data/inventory/shellEquipmentData";

function AggregateOrderForm() {
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
                to={`/order/${shellItemId}/aggregate`}
              >
                <i className="bi bi-box-arrow-left"></i>
              </Link>
            </span>
            {selectedItem?.item} Order Form
          </h2>
          <p className="fst-italic">To be sent to supplier</p>
          <hr />
        </section>
      </div>
    </>
  );
}

export default AggregateOrderForm;

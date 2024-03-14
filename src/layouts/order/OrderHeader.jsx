import React from 'react'
import { Link } from 'react-router-dom';
import { publicLinks } from '../../constants/links';

function OrderHeader() {
  return (
    <>
      <section>
        <div className="d-flex align-content-center justify-content-between mb-3">
          <div>
            <Link
              className="btn btn-outline-primary btn-sm me-2"
              to={publicLinks?.Dashboard}
            >
              <i className="bi bi-box-arrow-left"></i>
            </Link>
          </div>
          <div>
            <h2 className="fw-bold ">Orders</h2>
          </div>
          <div>
            <Link
              className="btn btn-outline-primary btn-sm"
              to={publicLinks.Orders}
            >
              Order
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default OrderHeader
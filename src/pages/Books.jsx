import React, { useState } from "react";
import PageBanner from "../components/pages/PageBanner";
import { dummyConstructionData } from "../data/OrdersData";
import { Link } from "react-router-dom";
import InvoiceModal from "../layouts/books/InvoiceModal";

function Books() {
  const [selectedOrderId, setSelectedOrderId] = useState(null);
  const pendingOrders = dummyConstructionData.filter(
    (order) => order.status === "Pending"
  );
  const pendingOrdersCount = pendingOrders.length;

  const activeOrders = dummyConstructionData.filter(
    (order) => order.status === "Active"
  );
  const activeOrdersCount = activeOrders.length;

  const activeOrdersTotalPrice = activeOrders.reduce((total, order) => {
    return (
      total +
      parseFloat(order.productDetail.paymentPlan.total.replace(/,/g, ""))
    );
  }, 0);

  const completedOrders = dummyConstructionData.filter(
    (order) => order.status === "Completed"
  );
  const completedOrdersTotalPrice = completedOrders.reduce((total, order) => {
    return (
      total +
      parseFloat(order.productDetail.paymentPlan.total.replace(/,/g, ""))
    );
  }, 0);

  return (
    <>
      <div className="container py-3">
        <PageBanner name="Books of Accounting" />
        <section>
          <h5 className="fw-bold text-secondary text-uppercase">
            transaction history
          </h5>
          <div className="row">
            <div className="col-md-4 col-sm-12 mb-2">
              <div className="card">
                <h6 className="card-header">Money In</h6>
                <div className="card-body">
                  <p className="card-text fw-bold">Ksh 0</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 mb-2">
              <div className="card">
                <h6 className="card-header">Money Out</h6>
                <div className="card-body">
                  <p className="card-text fw-bold">
                    Ksh {completedOrdersTotalPrice}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 mb-2">
              <div className="card">
                <h6 className="card-header">VAT Paid</h6>
                <div className="card-body">
                  <p className="card-text fw-bold">Ksh 0</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr />
        <section className="py-2">
          <h5 className="fw-bold text-secondary text-uppercase">
            Orders Summary
          </h5>
          <div className="row">
            <div className="col-md-4 col-sm-12 mb-2">
              <div className="card">
                <h6 className="card-header">Pending Orders</h6>
                <div className="card-body">
                  <p className="card-text fw-bold">
                    {pendingOrdersCount} orders
                  </p>
                  <p className="card-text fst-italic">
                    Orders awaiting approval from suppliers
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 mb-2">
              <div className="card">
                <h6 className="card-header">Active Orders</h6>
                <div className="card-body">
                  <p className="card-text fw-bold">
                    {activeOrdersCount} orders
                  </p>
                  <p className="card-text fst-italic">
                    Orders accepted by suppliers awaiting payment
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 mb-2">
              <div className="card">
                <h6 className="card-header">Pending Payment</h6>
                <div className="card-body">
                  <p className="card-text fw-bold">
                    Ksh {activeOrdersTotalPrice}
                  </p>
                  <p className="card-text fst-italic">
                    Total price of active orders
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr />
        <section>
          <h5 className="fw-bold text-secondary text-uppercase">
            Recent Orders
          </h5>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product</th>
                  <th>Supplier Name</th>
                  <th>Supplier Company</th>
                  <th>Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {activeOrders.map((item) => (
                  <>
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.product}</td>
                      <td>{item.supplierName}</td>
                      <td>{item.supplierCompany}</td>
                      <td>{item.date}</td>
                      <td>
                        <Link
                          className="btn btn-sm btn-outline-primary"
                          onClick={() => {
                            setSelectedOrderId(item.id);
                          }}
                        >
                          Invoice
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

      {selectedOrderId && (
        <InvoiceModal
          order={activeOrders.find((item) => item.id === selectedOrderId)}
          onClose={() => {
            setSelectedOrderId(null);
          }}
        />
      )}
    </>
  );
}

export default Books;

import React from "react";
import OrderHeader from "../layouts/order/OrderHeader";
import AllOrders from "../layouts/order/AllOrders";

function Orders() {
  return (
    <>
      <div className="container py-3">
        <OrderHeader />
        <hr />
        <AllOrders />
      </div>
    </>
  );
}

export default Orders;

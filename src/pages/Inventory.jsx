import React from "react";
import InventoryTypes from "../layouts/inventory/InventoryTypes";
import InventoryHeader from "../layouts/inventory/InventoryHeader";

function Inventory() {
  return (
    <div className="container py-3">
      <InventoryHeader />
      <hr />
      <InventoryTypes />
    </div>
  );
}

export default Inventory;

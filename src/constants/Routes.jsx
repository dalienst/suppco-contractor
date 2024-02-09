import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../layouts/Navbar";
import { publicLinks } from "./links";

const Landing = React.lazy(() => import("../pages/Landing"));
const Login = React.lazy(() => import("../pages/Login"));
const Register = React.lazy(() => import("../pages/Register"));
const Dashboard = React.lazy(() => import("../pages/Dashboard"));
const Sites = React.lazy(() => import("../pages/Sites"));
const Inventory = React.lazy(() => import("../pages/Inventory"));
const Orders = React.lazy(() => import("../pages/Orders"));
const Delivery = React.lazy(() => import("../pages/Delivery"));
const Employees = React.lazy(() => import("../pages/Employees"));
const Books = React.lazy(() => import("../pages/Books"));
const SiteDetail = React.lazy(() => import("../pages/SiteDetail"));
const SiteEquipment = React.lazy(() => import("../pages/SiteEquipment"));
const BuildersPlant = React.lazy(() => import("../pages/BuildersPlant"));
const ShellEquipmentDetail = React.lazy(() =>
  import("../pages/ShellEquipmentDetail")
);
const PlumbingElectricity = React.lazy(() =>
  import("../pages/PlumbingElectricity")
);
const ShellEquipment = React.lazy(() => import("../pages/ShellEquipment"));

function BaseRouter() {
  return (
    <Router>
      <Suspense
        fallback={
          <>
            <div className="spinner-grow text-success" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-success" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-success" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </>
        }
      >
        <Navbar />
        <Routes>
          <Route exact path={publicLinks?.Landing} element={<Landing />} />
          <Route path={publicLinks?.Login} element={<Login />} />
          <Route path={publicLinks?.Register} element={<Register />} />
          <Route path={publicLinks?.Dashboard} element={<Dashboard />} />
          <Route path={publicLinks?.Sites} element={<Sites />} />
          <Route path={publicLinks?.Inventory} element={<Inventory />} />
          <Route path={publicLinks?.Orders} element={<Orders />} />
          <Route path={publicLinks?.Delivery} element={<Delivery />} />
          <Route path={publicLinks?.Employees} element={<Employees />} />
          <Route path={publicLinks?.Books} element={<Books />} />
          <Route path="/sites/:siteId/detail" element={<SiteDetail />} />
          <Route
            path={publicLinks?.SiteEquipment}
            element={<SiteEquipment />}
          />
          <Route
            path={publicLinks?.ShellEquipment}
            element={<ShellEquipment />}
          />
          <Route
            path={publicLinks?.BuildersPlant}
            element={<BuildersPlant />}
          />
          <Route
            path={publicLinks?.PlumbingElectricity}
            element={<PlumbingElectricity />}
          />
          <Route
            path="/shell/:shellItemId/inventory"
            element={<ShellEquipmentDetail />}
          />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default BaseRouter;

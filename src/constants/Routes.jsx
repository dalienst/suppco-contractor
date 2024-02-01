import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../layouts/Navbar";
import { publicLinks } from "./links";

const Landing = React.lazy(() => import("../pages/Landing"));
const Login = React.lazy(() => import("../pages/Login"));
const Register = React.lazy(() => import("../pages/Register"));
const Dashboard = React.lazy(() => import("../pages/Dashboard"));

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
        </Routes>
      </Suspense>
    </Router>
  );
}

export default BaseRouter;

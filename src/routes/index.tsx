import { Route, Routes as RouteRRD, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

const Routes = () => (
  <RouteRRD>
    <Route index path="/login" element={<Login />} />
    <Route path="/home" element={<Home />} />
    <Route path="/register" element={<Register />} />
    <Route path="*" element={<Navigate to="/login" />} />
  </RouteRRD>
);
export default Routes;

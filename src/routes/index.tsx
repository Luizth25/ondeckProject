import { Route, Routes as RouteRRD, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";

const Routes = () => (
  <RouteRRD>
    <Route index element={<Login />} />
    <Route path="/home" element={<Home />} />
    <Route path="*" element={<Navigate to="/" />} />
  </RouteRRD>
);
export default Routes;
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Error from "./pages/Error";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UpdateProfile from "./pages/UpdateProfile";
import DashboardAdmin from "./pages/DashboardAdmin";
import AllUserAdmin from "./pages/AllUserAdmin";
import BannerAdmin from "./pages/BannerAdmin";
import PromoAdmin from "./pages/PromoAdmin";
import ActivityAdmin from "./pages/ActivityAdmin";
import CategoryAdmin from "./pages/CategoryAdmin";
import UpdateProfileAdmin from "./pages/UpdateProfileAdmin";
import Residencies from "./components/Residencies";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Home />
      </>
    ),
    errorElement: <Error />,
  },
  {
    path: "/explore",
    element: (
      <>
        <Explore />
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <Login />
      </>
    ),
  },
  {
    path: "/register",
    element: (
      <>
        <Register />
      </>
    ),
  },
  {
    path: "/update-profile",
    element: (
      <>
        <UpdateProfile />
      </>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <>
        <DashboardAdmin />
      </>
    ),
  },
  {
    path: "/all-user-admin",
    element: (
      <>
        <AllUserAdmin />
      </>
    ),
  },
  {
    path: "/banner-admin",
    element: (
      <>
        <BannerAdmin />
      </>
    ),
  },

  {
    path: "/promo-admin",
    element: (
      <>
        <PromoAdmin />
      </>
    ),
  },
  {
    path: "/activity-admin",
    element: (
      <>
        <ActivityAdmin />
      </>
    ),
  },
  {
    path: "/category-admin",
    element: (
      <>
        <CategoryAdmin />
      </>
    ),
  },
  {
    path: "/update-profile-admin",
    element: (
      <>
        <UpdateProfileAdmin />
      </>
    ),
  },
  {
    path: "/r",
    element: (
      <>
        <Residencies />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  // <Home />
  // </React.StrictMode>,

  <RouterProvider router={router} />
);

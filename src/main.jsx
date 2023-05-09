import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Error from "./pages/error";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UpdateProfile from "./pages/UpdateProfile";

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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  // <Home />
  // </React.StrictMode>,

  <RouterProvider router={router} />
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import Home from "./pages/Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Error from "./pages/error";

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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  // <Home />
  // </React.StrictMode>,

  <RouterProvider router={router} />
);

import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Rote from "../rotePage/Rote";
import Home from "./Pages/Home/Home";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Rote></Rote>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);

export default Route;

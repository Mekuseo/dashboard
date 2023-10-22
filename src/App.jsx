import React from "react";
import Home from "./page/home/Home";
import Performance from "./page/performance/Performance";
import Holdings from "./page/holdings/Holdings";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/global.scss";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/holdings",
      element: <Holdings />,
    },
    {
      path: "/performance",
      element: <Performance />,
    },
  ]);

  return (
    <div className="main">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;

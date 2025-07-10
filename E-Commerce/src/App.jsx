import { useState } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./Pages/Home";
import RootLayout from "./Layout/RootLayout";
import Shop from "./Pages/Shop";
import ProductDetails from './Pages/ProductDetails';
import Card from "./Pages/Card";

function App() {
  const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      {
        path: "shop",
        children: [
          { index: true, Component: Shop },
          { path: "productdetails/:id", Component: ProductDetails }, // ✔️ NESTED
        ],
      },
      {path:"/card", Component:Card}
    ],
  },
]);


  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

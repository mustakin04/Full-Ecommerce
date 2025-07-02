import { useState } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./Pages/Home";

function App() {
  const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    children: [
      { index: true, Component: Home },
      { path: "/", Component: Home },
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

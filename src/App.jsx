import React from "react";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import List from "./pages/List";
import Article from "./pages/Article";
import Contact from "./pages/Contact";

export default function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/list",
      element: <List />,
    },
    {
      path: "/article",
      element: <Article />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
  ]);
  return <RouterProvider router={routes} />;
}

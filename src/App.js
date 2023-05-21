/**
 * created by surendra yalakala
 */
import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurentDetails from "./components/RestaurentDetails";
import Profile from "./components/Profile";
import ShimmerUIComponent from "./components/ShimmerUIComponenet";

// Upon demand loading => upon render => suspend loading
const InstaMart = lazy(() => import("./components/InstaMart"));
const AboutUS = lazy(() => import("./components/AboutUS"));

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/aboutus",
        element: (
          <Suspense fallback={<ShimmerUIComponent />}>
            <AboutUS />
          </Suspense>
        ),
        children: [
          {
            path: "profile", // parentpath/{path} => localhost/about/profile
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurentDetails />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<ShimmerUIComponent />}>
            <InstaMart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import HomePage from './pages/HomePage';
import HomeLayout from './pages/HomeLayout';
import ProductDetailPage from './pages/ProductDetailPage'
import Cart from './pages/cartPage';
import CheckoutPage from './pages/CheckoutPage';
import ProductListpage from './component/ProductListPage/index';
export const router=createBrowserRouter([
    {
      // path: "/",
      element: <HomeLayout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/detailpage",
          element: <ProductDetailPage />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/checkout",
          element: <CheckoutPage />,
        },
        {
          path: "/list",
          element: <ProductListpage />,
        },
        // {
        //   path: "dashboard",
        //   element: <Dashboard />,
        //   loader: ({ request }) =>
        //     fetch("/api/dashboard.json", {
        //       signal: request.signal,
        //     }),
        // },
        // {
        //   element: <AuthLayout />,
        //   children: [
        //     {
        //       path: "login",
        //       element: <Login />,
        //       loader: redirectIfUser,
        //     },
        //     {
        //       path: "logout",
        //       action: logoutUser,
        //     },
        //   ],
        // },
      ],
    },
  ]);
  
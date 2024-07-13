import { Button } from "@/components/ui/button";
import { useAppSelector } from "./hooks";
import {
  About,
  Cart,
  Checkout,
  Error,
  HomeLayout,
  Landing,
  Login,
  Orders,
  Products,
  Register,
  SingleProduct,
} from "./pages";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorElement from "./components/ErrorElement";
import { loader as landingLoader } from "./pages/Landing";
import { loader as productsLoader } from "./pages/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: landingLoader,
      },
      {
        path: "about",
        element: <About />,
        errorElement: <ErrorElement />,
      },
      {
        path: "products",
        element: <Products />,
        errorElement: <ErrorElement />,
        loader: productsLoader,
      },
      {
        path: "products/:id",
        element: <SingleProduct />,
        errorElement: <ErrorElement />,
      },
      {
        path: "cart",
        element: <Cart />,
        errorElement: <ErrorElement />,
      },
      {
        path: "checkout",
        element: <Checkout />,
        errorElement: <ErrorElement />,
      },
      {
        path: "orders",
        element: <Orders />,
        errorElement: <ErrorElement />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <Error />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;

import { createBrowserRouter } from "react-router-dom";
import Home from "../features/home/Home";
import Login from "../features/login/Login";
import NotFound from "../features/404/NotFound";
import RootLayout from "./RootLayout";
import UserList from "../features/users/UserList";
import UserForm from "../features/users/UserForm";
import ProductsList from "../features/products/ProductsList";
import ProductForm from "../features/products/ProductForm";
import CartList from "../features/cart/CartList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          { path: "users", element: <UserList /> },
          { path: "new-user", element: <UserForm /> },
          { path: "edit-user/:id", element: <UserForm /> },
          { path: "products", element: <ProductsList /> },
          { path: "new-product", element: <ProductForm /> },
          { path: "edit-product/:id", element: <ProductForm /> },
          { path: "cart", element: <CartList /> },
        ],
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "*", element: <NotFound /> },
]);

export default router;

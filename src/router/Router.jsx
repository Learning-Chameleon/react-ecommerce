import { createBrowserRouter } from "react-router-dom";
import Home from "../features/Home/Home";
import Login from "../features/Login/Login";
import NotFound from "../features/404/NotFound";
import RootLayout from "./RootLayout";
import UserList from "../features/Users/UserList";
import UserForm from "../features/Users/UserForm";
import ProductsList from "../features/Products/ProductsList";
import ProductForm from "../features/Products/ProductForm";
import CartList from "../features/Cart/CartList";

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
          { path: "edit-user", element: <UserForm /> },
          { path: "products", element: <ProductsList /> },
          { path: "new-product", element: <ProductForm /> },
          { path: "edit-product", element: <ProductForm /> },
          { path: "cart", element: <CartList /> },
        ],
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "*", element: <NotFound /> },
]);

export default router;

import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <Link to="/users">User List</Link>
      <Link to="/new-user">Add New User</Link>
      <Link to="/products">Products</Link>
      <Link to="/new-product">Add New Product</Link>
      <Link to="/cart">Cart</Link>
    </nav>
  );
}
export default Navbar;

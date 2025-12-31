import { useNavigate } from "react-router-dom";
import "./ProductCard.css";
export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const onEdit = () => {
    navigate(`/edit-product/${product.id}`);
  };
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <h1>{product.price}</h1>
      <h4 title={product.description}>{product.title}</h4>
      <button className="add-to-cart">Add to Cart</button>
      <button className="buy-now" onClick={onEdit}>
        Edit
      </button>
    </div>
  );
}

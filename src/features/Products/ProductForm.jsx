import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productService } from "../../api/productService";

const productTemplate = {
  id: null,
  title: "",
  description: "",
  price: 0,
  image: "",
  category: "",
};
export default function ProductForm() {
  const { id } = useParams();
  const [product, setProduct] = useState(productTemplate);
  const [mode, setMode] = useState(id ? "edit" : "create");
  useEffect(() => {
    if (id) {
      productService
        .getProductById(id)
        .then((response) => {
          setProduct(response.data);
        })
        .catch((error) => {
          console.error("Error fetching product:", error);
        });
    }
  }, [id]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [id]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (mode === "edit") {
      productService
        .updateProduct(product.id, product)
        .then((response) => {
          alert("Product updated successfully!");
          console.log("Product updated:", response.data);
        })
        .catch((error) => {
          alert("Error updating product.");
          console.error("Error updating product:", error);
        });
    } else {
      productService
        .createProduct(product)
        .then((response) => {
          alert("Product created successfully!");
          console.log("Product created:", response.data);
        })
        .catch((error) => {
          alert("Error creating product.");
          console.error("Error creating product:", error);
        });
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <h2>{mode === "edit" ? "Edit Product" : "Create Product"}</h2>
      {product.image && (
        <img
          src={product.image}
          alt={product.title}
          width={"250px"}
          height={"100%"}
        />
      )}
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="id">ID:</label>
            </td>
            <td>
              <input
                type="text"
                id="id"
                value={product.id}
                onChange={handleInputChange}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="title">Title:</label>
            </td>
            <td>
              <input
                type="text"
                id="title"
                value={product.title}
                onChange={handleInputChange}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="description">Description:</label>
            </td>
            <td>
              <input
                type="text"
                id="description"
                value={product.description}
                onChange={handleInputChange}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="price">Price:</label>
            </td>
            <td>
              <input
                type="text"
                id="price"
                value={product.price}
                onChange={handleInputChange}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="image">Image URL:</label>
            </td>
            <td>
              <input
                type="text"
                id="image"
                value={product.image}
                onChange={handleInputChange}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="category">Category:</label>
            </td>
            <td>
              <input
                type="text"
                id="category"
                value={product.category}
                onChange={handleInputChange}
              />
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <button type="submit">
                {mode === "edit" ? "Update Product" : "Create Product"}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

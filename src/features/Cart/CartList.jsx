import { cartService } from "../../api/cartService";
import { productService } from "../../api/productService";
import React, { useEffect, useState } from "react";
export default function CartList() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    cartService.getAllCarts.then((response) => {
      let userCart = response.data.filter((cart) => cart.userId === 1);
      console.log("Carts:", response.data);
      productService.getAllProducts.then((prodResponse) => {
        console.log("Products:", prodResponse.data);
        let products = prodResponse.data;
        userCart = userCart.map((cart) => {
          cart.products = cart.products.map((cartProduct) => {
            let fullProduct = products.find(
              (product) => product.id === cartProduct.productId
            );
            return { ...cartProduct, ...fullProduct };
          });
          return cart;
        });
        console.log("Carts with Products:", userCart);
        setCart(userCart);
      });
    });
  }, []);
  return (
    <table border={1} cellPadding={10} cellSpacing={0}>
      <tbody>
        {cart.map((cart) => (
          <React.Fragment key={cart.id}>
            {cart.products.map((product) => (
              <tr key={product.id}>
                <td>
                  <img
                    width={50}
                    height={"auto"}
                    src={product.image}
                    alt={product.title}
                  />
                </td>
                <td>{product.title}</td>
                <td>{product.quantity}</td>
                <td>${product.price}</td>
              </tr>
            ))}
            <tr>
              <td
                colSpan={4}
                style={{ textAlign: "right", fontWeight: "bold" }}
              >
                Total: $
                {cart.products
                  .reduce(
                    (total, product) =>
                      total + product.price * product.quantity,
                    0
                  )
                  .toFixed(2)}
              </td>
            </tr>
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
}

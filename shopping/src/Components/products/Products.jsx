import React from "react";
import "./styles.css";
import { Button } from "@material-ui/core";

const Products = (props) => {
  const { products, handleAddToCart } = props;

  return (
    <ul className="products">
      {products.map((product) => (
        <li key={product._id}>
          <div className="product">
            <a href="#">
              <img src={product.image} alt="productimage"></img>
              <p>{product.title}</p>
            </a>
            <span className="producttext">{product.description}</span>
            <div className="productaction">
              <div className="productprice">$ {product.price}</div>
              <div className="btn">
                <Button onClick={() => handleAddToCart(product)}>
                  Add to cart
                </Button>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Products;

import React, { useState, useEffect } from "react";
import "./styles.css";
import { Button } from "@material-ui/core";
import Fade from "react-reveal/Fade";
import Modal from "react-modal";
import { Zoom } from "react-reveal";
import { useSelector, useDispatch } from "react-redux";
import { FetchData, filterProduct } from "../../action/productaction";

const Products = (props) => {
  const products = useSelector((state) => state.products.items);

  const filter =
    useSelector((state) => state.products.filterproducts) || products;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchData());
  }, []);

  const { handleAddToCart } = props;

  const [product, setProduct] = useState(null);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = (product) => {
    setProduct(product);
    setIsOpenModal(true);
  };
  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <div>
      <Fade bottom cascade>
        <ul className="products">
          {!filter ? (
            <div>...loading</div>
          ) : (
            filter.map((product) => (
              <li key={product.id}>
                <div className="product">
                  <a href="#">
                    <img
                      onClick={() => openModal(product)}
                      src={product.image}
                      alt="productimage"
                      width="290rem"
                      height="320rem"
                    ></img>
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
            ))
          )}
        </ul>
      </Fade>
      {product && (
        <Modal isOpen={isOpenModal}>
          <Zoom>
            <div className="modalmain">
              <img src={product.image} alt="productimage"></img>
              <div className="modalcontent">
                <div className="buttonmodal">
                  <button onClick={closeModal}>
                    {""}x{""}
                  </button>
                </div>
                <div>hello from modal {product.title}</div>
                <span className="producttext">{product.description}</span>
                <div className="productprice">$ {product.price}</div>
              </div>
            </div>
          </Zoom>
        </Modal>
      )}
    </div>
  );
};

export default Products;

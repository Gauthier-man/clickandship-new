import React from "react";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";

export default function Manage() {
  return (
    <>
      <h3>Manage product</h3>
      <button>Ajouter un produit +</button>
      <hr />
      <div className="product-cart-card">
        <img src="src/images/Untitled_design__2___3_-removebg-preview.png" alt="tee-shirt" />
        <div className="column">
          <div>
            <h3>Lorem ipsum</h3>
            <h4>Lorem ipsum</h4>
            <span>15.99€</span>
          </div>
          <div className="prod-controls">
            <div className="btn-prod">
              <FaMinus />
              <span>1</span>
              <FaPlus />
            </div>
            <FaRegTrashCan size={"1.5rem"} />
          </div>
        </div>
        <span className="price">15.99€</span>
        <FaEdit className="edit-icon" size={"1.4rem"} />
      </div>
      <hr />
      <div className="product-cart-card">
        <img src="src/images/Untitled_design__3_-removebg-preview.png" alt="tee-shirt" />
        <div className="column">
          <div>
            <h3>Lorem ipsum</h3>
            <h4>Lorem ipsum</h4>
            <span>15.99€</span>
          </div>
          <div className="prod-controls">
            <div className="btn-prod">
              <FaMinus />
              <span>1</span>
              <FaPlus />
            </div>
            <FaRegTrashCan size={"1.5rem"} />
          </div>
        </div>
        <span className="price">15.99€</span>
        <FaEdit className="edit-icon" size={"1.4rem"} />
      </div>
      <hr />
    </>
  );
}

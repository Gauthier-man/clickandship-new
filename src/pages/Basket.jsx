import React from "react";
import Header from "./Header.jsx";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import Products from "./Products.jsx";
import ProductOrder from "./ProductOrder.jsx";


export default function Basket({products, setProducts}) {
  return (
    <>
      <Header />
      <div className="view-basket">
        <div className="backet-container">
          <h2>Votre Panier</h2>
          <hr />
          <div className="product-cart-card">
             {products.map((p)  => 
                          <ProductOrder product={p} key={p.id}/>
                        )
                          
                        }
                        
          </div>
          <button>Paiement - 31.98€ EUR</button>
          <hr />
          {/* <div className="product-cart-card">
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
          </div> */}
          {/* <hr /> */}
        </div>
        <div className="backet-resume">
          <h3>Résumé de la commande</h3>
          <hr />
          <p>Ajouter une note de commande</p>
          <hr />
          <div className="total">
            <h4>Sous-total: </h4>
            <span>31.98 € EUR</span>
          </div>
          <button>Paiement</button>
        </div>
      </div>
    </>
  );
}

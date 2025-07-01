import React, { useContext, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { Link } from "react-router-dom";
import ProductOrder from "./ProductOrder.jsx";
import { PanierContext } from "../store/panier-context.jsx";

export default function Header({products, setProducts}) {
  const [showCart, setShowCart] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const {items} = useContext(PanierContext);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <>
      <header>
        <nav className="navbar">
          <Link to="/">
            <img src="src\images\logo.png" alt="logo click and ship" />
          </Link>
          <div className="relative">
            <input type="text" name="searchInput" id="searchInput" placeholder="Recherche" />
            <IoIosSearch size={"1.6rem"} className="position" />
          </div>
          <div className="icon-container">
            <div className="user-menu-container" onClick={() => setShowUserMenu(!showUserMenu)}>
              <i className="fa-regular fa-user"></i>
            </div>
            <button>Panier ({items.length})</button>
            <i className="fi fi-rr-shopping-cart" onClick={toggleCart}></i>

            {showUserMenu && (
              <div className="user-dropdown">
                <Link to="/login">Se connecter</Link>
                <Link to="/register">S'inscrire</Link>
              </div>
            )}
          </div>
        </nav>
      </header>

      {showCart && (
        <>
          <div className="cart-overlay" onClick={toggleCart}></div>
          <div className="cart-drawer">
            <div className="basket-text">
              <h2>Votre Panier</h2>
              <Link to="/basket">
                <h3>Voir le panier</h3>
              </Link>
            </div>
            <h3>Produits</h3>
            <hr />
            <div className="product-cart-card">
                 {products && products.map((p)  => 
                   <ProductOrder product={p} key={p.id}/>
                  )
              
                 }
           
             
       
            </div>
           
            <div className="product-cart-card">
              
              
              
            </div>
          
          </div>
        </>
      )}
    </>
  );
}

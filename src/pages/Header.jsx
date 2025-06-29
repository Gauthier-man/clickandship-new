import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Header() {
  const [showCart, setShowCart] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

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
              <i class="fa-regular fa-user"></i>
            </div>
            <i class="fi fi-rr-shopping-cart" onClick={toggleCart}></i>

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
            </div>
            <hr />
            <button>Paiement - 31.98€ EUR</button>
          </div>
        </>
      )}
    </>
  );
}

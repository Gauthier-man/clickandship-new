import React, { useEffect, useState } from "react";
import "../App.jsx";
import "../App.css";

import "../assets/script.js";
import Header from "./Header.jsx";
import Products from "./Products.jsx";

export default function Home({products, setProducts}) {
  

  return (

    <>
     
      <main>
        <img src="src\images\Rectangle 1 (2).png" alt="image" />
        <h3>Nouveautés</h3>
        <div className="card-container">
            {products.map((p)  => 
              <Products product={p} key={p.id}/>
            )

            }
        </div>
        <div className="card-info">
          <div>
            <h3>Nouveautés de la saison </h3>
            <p>Découvrez nos dernières collections éco-responsables, conçues pour allier style, confort et respect de l’environnement.</p>
            <p>-T-shirts en coton bio, sacs en toile réutilisables, et plus encore.</p>
            <p>-Fabriqués en Europe avec des matériaux durables.</p>
            <p>-Livraison rapide et retours gratuits pendant 30 jours.</p>
            <button>Découvrir la collection</button>
          </div>
          <img src="src\images\Untitled design (1).png" alt="image" />
        </div>
        <section>
          <h3>T-shirts de saison</h3>
          <div className="card-season">
              {products.map((p)  => 
              <Products product={p} key={p.id}/>
            )

            }

          
          </div>
        </section>
      </main>
    </>
  );
}

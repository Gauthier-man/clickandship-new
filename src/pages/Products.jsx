import React from 'react'

export default function Products({product}) {
  return (
  

      <div className="card">
            <img src="src\images\Untitled_design-removebg-preview (4).png" alt="produit" />
            <span className="new">NOUVEAU</span>
            <div className="card-content">
              <h5>{product.name}</h5>
              <p>{product.description}</p>
              <span>{product.price}</span>
              <button>AJOUTER AU PANIER</button>
              {/* <span className="new">NOUVEAU</span> */}
            </div>
          </div>
  
  )
}

import React from 'react'
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";


export default function ProductOrder({product}) {
  return (
   <>

    const {} = useContext(PanierContext);


   <div className="cardOrder">
    <img src="src/images/Untitled_design__2___3_-removebg-preview.png" alt="tee-shirt" />
              <div className="column">
                <div>
                  <h3>{product.name}</h3>
                  <h4>{product.description}</h4>
                  <span>{product.price}</span>
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
             </div>
           
         
            
    </>
  )
}







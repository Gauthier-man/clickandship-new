import { createContext } from "react";


// Items représente les éléments présent dans le panier
export const PanierContext = createContext({
    items: [],
    addItemToCart: () => {},
});

export const PanierContextProvider = ({children})=> 

{

    //Fonction d'ajout dans le panier
    const handleAddToProduct = (productId) => {
        console.log(productId);
    };



    const initialValue = {
        items: [],
        addItemToCart: handleAddToProduct,
    };

    return <PanierContextProvider.Provider value={initialValue}>
            {children}
    </PanierContextProvider.Provider>
};



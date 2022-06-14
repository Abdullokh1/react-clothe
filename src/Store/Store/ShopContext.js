import { createContext, useReducer, useContext, useState } from "react";
import shopReducer, {initialState} from './ShopReducer'

const ShopContext = createContext(initialState)

export const ShopProvider = ({children}) =>{
  const [state, dispatch] = useReducer(shopReducer, initialState)

  const addToCard = (products) =>{
    const updateCard = state.products.concat(products)
    updatePrice(updateCard)
    dispatch({
      type: 'ADD_TO_CARD',
      payload: {
        products: updateCard
      }
    });
  }

  const removeFromCard = (product) =>{
    const updateCard = state.products.filter(
      (currentProduct) => currentProduct.name !== product.name
    )
    updatePrice(updateCard)

    dispatch({
      type: 'REMOVE_FROM_CARD',
      payload: {
        products: updateCard
      }
    });
  };

  const updatePrice = (products) => {
    let total = 0;
    products.forEach((product) => (total += product.price));

    dispatch({
      type: "UPDATE_PRICE",
      payload: {
        total
      }
    });
  };
 
  const value = {
    total: state.total,
    products: state.products,
    addToCard,
    removeFromCard
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
}

const useShop = () =>{
  const context = useContext(ShopContext);

  if(context === undefined){
    throw new Error ('useShop must be used within ShopContext')
  }
  return context;
}

export default useShop;

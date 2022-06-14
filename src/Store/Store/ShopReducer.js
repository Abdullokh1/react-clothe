export const initialState = {
  total: 0,
  products: []
}


const shopReducer = (state, action) =>{
  const {type, payload} = action

  switch(type){

    case "ADD_TO_CARD":
    return {
      ...state,
      products: payload.products
    };
    case 'REMOVE_FROM_CARD':
      return {
        ...state,
        products: payload.products
      };
    case "UPDATE_PRICE":
      return {
        ...state,
        total: payload.total
      };

  }
}

export default shopReducer;
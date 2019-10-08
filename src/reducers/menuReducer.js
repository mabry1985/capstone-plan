const initState = {
  cart: [],
}


const menuReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_FOOD':
      console.log('created food', action);
    return state;

    case 'CREATE_FOOD_ERROR':
      console.log('create food error', action.err);
      return state;

    case 'CREATE_BEER':
      console.log('created beer', action)
      return state;

    case 'CREATE_BEER_ERROR':
      console.log('create beer error', action.err);
      return state;

    case 'ADD_TO_CART': {
      const cart = [...state.cart, action.item]
      return {
        ...state,
        cart,
      }
    }
    case 'REMOVE_FROM_CART': {
      const cart = [...state.cart]
      cart.splice(action.index, 1)
      return {
        ...state,
        cart,
      }
    }
    default: 
    return state;
  }

}

export default menuReducer
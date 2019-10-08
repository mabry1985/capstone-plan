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

    case 'BUY_BEER':
      console.log('bought beer', action);
      return state;

    case 'BUY_BEER_ERROR':
      console.log('buy beer error', action.err)
      return state;

    case 'ADD_TO_CART': {
      console.log('added to cart', action)
      return state;
    }
    case 'REMOVE_FROM_CART': {
      console.log('removed from cart', action)
      return state;
    }
    default: 
    return state;
  }

}

export default menuReducer
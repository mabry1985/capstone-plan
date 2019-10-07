const initState = {}


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

    case 'BUY_FOOD':
      console.log('bought food', action);
      return state;

    case 'BUY_FOOD_ERROR':
      console.log('buy food error', action.err)
      return state;

    default: 
    return state;
  }

}

export default menuReducer
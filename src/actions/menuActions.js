export const createFood = (food) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {

    dispatch({type: 'CREATE_FOOD', food})
  }
}

export const createBeer = (beer) => {
  return (dispatch, getState) => {
    dispatch({ type: 'CREATE_BEER', beer })
  }
}
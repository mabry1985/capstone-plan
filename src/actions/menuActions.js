export const createFood = (food) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore.collection('food').add({
      ...food
    }).then(() => {
      dispatch({type: 'CREATE_FOOD', food})
    }).catch((err) => {
      dispatch({ type: 'CREATE_FOOD_ERROR', err})
    })
  }
}

export const createBeer = (beer) => {
  return (dispatch, getState, { getFirebase, getFirestore}) => {
    const firestore = getFirestore();
    firestore.collection('beers').add({
      ...beer
    }).then(() => {
      dispatch({ type: 'CREATE_BEER', beer })
    }).catch((err) => {
      dispatch({ type: 'CREATE_BEER_ERROR', err })
    })
  }
}
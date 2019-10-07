export const createFood = (food) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore.collection('food').add({
      ...food,
    }).then(() => {
      dispatch({type: 'CREATE_FOOD', food})
    }).catch((err) => {
      dispatch({ type: 'CREATE_FOOD_ERROR', err})
    })
  }
}

export const editFood = (food) => {
  return(dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore.collection('food').doc(food.id).set ({
      ...food,
    }).then(() => {
      dispatch({type: 'EDIT_FOOD', food})
    }).catch((err) => {
      dispatch({ type: 'EDIT_FOOD_ERROR', err})
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

export const editBeer = (beer) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore.collection('beers').doc(beer.id).set({
      ...beer,
    }).then(() => {
      dispatch({ type: 'EDIT_BEER', beer })
    }).catch((err) => {
      dispatch({ type: 'EDIT_BEER_ERROR', err })
    })
  }
}

export const buyBeer = (beer) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore.collection('beers').doc(beer.id).set({
      ...beer,
      inCart: true,
    }).then(() => {
      dispatch({ type: 'BUY_BEER', beer })
    }).catch((err) => {
      dispatch({ type: 'BUY_BEER_ERROR', err })
    })
  }
}

export const buyFood = (food) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore.collection('foods').doc(food.id).set({
      ...food,
      inCart: true,
    }).then(() => {
      dispatch({ type: 'BUY_FOOD', food })
    }).catch((err) => {
      dispatch({ type: 'BUY_FOOD_ERROR', err })
    })
  }
}
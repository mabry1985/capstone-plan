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

export const addToCart = (item) => {
  return (dispatch, getState) => {
      dispatch({ type: 'ADD_TO_CART', item})
    }
}

export const removeFromCart = (index) => {
    return (dispatch, getState) => {
      dispatch({ type: 'REMOVE_FROM_CART', index })
  }
}

export const checkout = (user, auth, total) => {
  return (dispatch, getState, { getFirestore }) => {
    console.log(user, auth, total)
    let err = null
    if (user.balance >= total) {
      user = {
        ...user,
        balance: user.balance - total,
      }
    } else {
      err = "Balance too low, consider selling some data"
    }
    const firestore = getFirestore();
    firestore.collection('users').doc(auth.uid).set({
      ...user
    }).then(() => { 
      dispatch({ type: 'CHECKOUT', user, total})
    }).catch((err) => {
      dispatch({ type: 'CHECKOUT_ERROR', err})
    })
  }
}
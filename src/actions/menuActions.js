export const createFood = (food) => {
  return (dispatch, getState) => {
    dispatch({type: 'CREATE_FOOD', food})
  }
}
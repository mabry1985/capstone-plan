import React from 'react'

const Food = (props) => {
  return (
    <div class="menu-items" key={props.food.id}>
        <h3>{props.food.name}</h3>
        <p>${props.food.price}.00</p>
        <p>{props.food.description}</p>
        {/* <button
          onClick={() => dispatch({ type: 'SELL_BEER', id: props.food.id })}>
          Sell
      </button>
        <button
          onClick={() => dispatch({ type: 'EDIT_BEER', id: props.food.id })}>
          Edit
      </button> */}
        <hr />
      </div> 
  )
}

export default Food

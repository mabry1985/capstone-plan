import React from 'react'

const Beer = (props) => {
  return (
    <div className="menu-items" key={props.beer.id}>
      <h3>{props.beer.name} - {props.beer.abv}%</h3>
      <p><em>{props.beer.brewery}</em></p>
      <p>${props.beer.price}.00</p>
      {/* <p>pints left: {props.beer.pintsLeft}</p>
      <button
        onClick={() => dispatch({ type: 'SELL_BEER', id: props.beer.id })}>
        Sell
      </button>
      <button
        onClick={() => dispatch({ type: 'EDIT_BEER', id: props.beer.id })}>
        Edit
      </button> */}
      <hr />
    </div>
  )
}

export default Beer

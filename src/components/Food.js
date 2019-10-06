import React from 'react'
import { Link } from 'react-router-dom'

const Food = (props) => {
  const { food } = props;
  return (
    <div className="menu-items" key={food.id}>
        <h3>{food.name}</h3>
        <p>${food.price}.00</p>
        <p>{food.description}</p>
        <hr />
      </div> 
  )
}

export default Food

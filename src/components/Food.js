import React from 'react'
import { Link } from 'react-router-dom'

const Food = (props) => {
  console.log(props)
  return (
    <div className="menu-items" key={props.food.id}>
        <h3>{props.food.name}</h3>
        <p>${props.food.price}.00</p>
        <p>{props.food.description}</p>
        <p>{props.food.id}</p>
        <Link to={'/edit-food/' + props.food.id}>
         <button>
           Edit
         </button> 
        </Link>
        <hr />
      </div> 
  )
}

export default Food

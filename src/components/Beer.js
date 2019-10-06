import React from 'react';
import  { Link } from 'react-router-dom';


const Beer = (props) => {
  return (
    <div className="menu-items" key={props.beer.id}>
      <h3>{props.beer.name} - {props.beer.abv}%</h3>
      <p><em>{props.beer.brewery}</em></p>
      <p>${props.beer.price}.00</p>
      <Link to={'/edit-beer/' + props.beer.id} >
      <button>
        Edit
      </button> 
      </Link>
      <hr />
    </div>
  )
}

export default Beer

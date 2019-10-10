import React from 'react';
import { Link } from 'react-router-dom';

const Food = (props) => {
  const { food, profile } = props;
  return (
    <div className="menu-items" key={food.id}>
      <h3 onClick={() => props.addToCart(food)} className="food-name">{food.name}</h3>
          {profile.admin ?
            <Link to={'/edit-food/' + food.id}>
              <p className="edit-food-button">Edit</p>
            </Link> : null}
        <p className="food-price">${food.price}</p>
      </div> 
  )
}

export default Food

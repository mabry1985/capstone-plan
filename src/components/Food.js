import React from 'react';
import { Link } from 'react-router-dom';
import './food.css';

const Food = (props) => {
  const { food, profile } = props;
  return (
    <div className="food-menu-items" key={food.id}>
      <td onClick={() => props.addToCart(food)} className="food-name">{food.name}</td>
          {profile.admin ?
            <Link to={'/edit-food/' + food.id}>
              <td className="edit-food-button">Edit</td>
            </Link> : null}
        <td className="food-price">${food.price}</td>
      </div> 
  )
}

export default Food

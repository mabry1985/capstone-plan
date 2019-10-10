import React from 'react';
import { Link } from 'react-router-dom';
import './beer.css';

const Beer = (props) => {
  const { beer, profile } = props;
  return (
    <div className="beer-menu-items" key={beer.id}>
      <td onClick={() => props.addToCart(beer)} className="beer-name">{beer.name}</td>
      {profile.admin ?
        <Link to={'/edit-beer/' + beer.id}>
          <td className="edit-beer-button">Edit</td>
        </Link> : null
      }
      <td className="beer-price">${beer.price}</td>
    </div>
  )
}

export default Beer


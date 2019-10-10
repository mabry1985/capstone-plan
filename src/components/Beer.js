import React from 'react';
import { Link } from 'react-router-dom';

const Beer = (props) => {
  const { beer, profile } = props;
  return (
    <div className="menu-items" key={beer.id}>
      <h3 onClick={() => props.addToCart(beer)} className="beer-name">{beer.name}</h3>
      {profile.admin ?
          <Link to={'/edit-beer/' + beer.id}>
            <p className="edit-beer-button">Edit</p>
          </Link> : null}
      <p className="beer-price">${beer.price}</p>
    </div>
  )
}

export default Beer
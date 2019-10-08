import React from 'react';
import { Link } from 'react-router-dom';

const Beer = (props) => {
  const { beer, profile } = props;
  return (
    <div className="menu-items" key={beer.id}>
      <td><h3>{beer.name}</h3></td>
      <td><p>${beer.price}.00</p></td>
      <td>
      {profile.admin ?
          <Link to={'/edit-beer/' + beer.id}>
            <p>Edit</p>
          </Link> : null}
        </td> 
      <hr />
    </div>
  )
}

export default Beer
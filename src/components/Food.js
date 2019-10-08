import React from 'react';
import { Link } from 'react-router-dom';

const Food = (props) => {
  const { food, profile } = props;
  return (
    <div className="menu-items" key={food.id}>
        <td><h3>{food.name}</h3></td>
        <td><p>${food.price}.00</p></td>
        <td>
          {profile.admin ?
            <Link to={'/edit-food/' + food.id}>
              <p>Edit</p>
            </Link> : null}
        </td> 
        <hr />
      </div> 
  )
}

export default Food

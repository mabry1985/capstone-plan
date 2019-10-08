import React from 'react';

const BeerDetails = (props) => {
  const { beer } = props;
  return (
    <div className="menu-items" key={beer.id}>
      <h3>{beer.name} - {beer.abv}%</h3>
      <p><em>{beer.brewery}</em></p>
      <p>${beer.price}.00</p>
      <hr />
    </div>
  )
}

export default BeerDetails
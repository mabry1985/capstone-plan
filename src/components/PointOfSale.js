import React from 'react';
import Beer from './Beer';
import Food from './Food';
import { connect } from 'react-redux';

class PointOfSale extends React.Component {
  render(){
    const { beer, food } = this.props
    console.log(this.props);
    return (
      <div className="menu">
        <div className="beer-list">
          {beer.map(beer => (
            <div key={beer.id}>
              {/* {keg.editing ? <EditKeg keg={keg} key={keg.id} /> : */}
                <Beer key={beer.id} beer={beer} />
            </div>
          ))}
        </div>
        <div className="food-list">
        {food.map(food => (
          <div key={food.id}>
            {/* {keg.editing ? <EditKeg keg={keg} key={keg.id} /> : */}
              <Food key={food.id} food={food} />
          </div>
        ))}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    food: state.menu.food,
    beer: state.menu.beer,
  }
}

export default connect(mapStateToProps)(PointOfSale)

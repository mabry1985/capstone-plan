import React from 'react';
import Beer from './Beer';
import Food from './Food';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class PointOfSale extends React.Component {
  render(){
    const { beer, food } = this.props
    return (
      <div className="menu">
        <div className="beer-list">
          { beer && beer.map(beer => (
            <div key={beer.id}>
              {/* {keg.editing ? <EditKeg keg={keg} key={keg.id} /> : */}
                <Beer key={beer.id} beer={beer} />
            </div>
          ))}
        </div>
        <div className="food-list">
        { food && food.map(food => (
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
  console.log(state)
  return {
    food: state.firestore.ordered.food,
    beer: state.firestore.ordered.beers,
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { 
      collection: 'food',
    }
  ]),
    firestoreConnect([
      {
        collection: 'beers',
      }
    ])
)(PointOfSale)

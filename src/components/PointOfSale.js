import React from 'react';
import Beer from './Beer';
import Food from './Food';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Link, Redirect } from 'react-router-dom';
import Profile from './Profile'
import './point-of-sale.css';


class PointOfSale extends React.Component {
  render(){
    const { beer, food, auth, profile } = this.props
    if (!auth.uid) return <Redirect to='/' />
    return (
      <div className="menu">
      <Profile/>
        <div className="beer-list">
          { beer && beer.map(beer => (
            <div key={beer.id}>
                <Beer key={beer.id} beer={beer} />
              {profile.admin ? 
                <Link to={'/edit-beer/' + beer.id}>
                  <p>Edit</p>
                </Link> : null }

            </div>
          ))}
        </div>
        <div className="food-list">
        { food && food.map(food => (
          <div key={food.id}>
              <Food key={food.id} food={food} />
              {profile.admin ? 
              <Link to={'/edit-food/' + food.id}>
                <p>Edit</p>
              </Link> : null }
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
    auth: state.firebase.auth,
    profile: state.firebase.profile,
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

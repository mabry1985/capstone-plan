import React from 'react';
import Beer from './Beer';
import Food from './Food';
import Profile from './Profile';
import Cart from './Cart';
import { buyBeer, buyFood} from './../actions/menuActions';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Link, Redirect } from 'react-router-dom';
import './point-of-sale.css';


class PointOfSale extends React.Component {
  handleBuyBeer = (beer) => {
    this.props.buyBeer(beer);
  }

  handleBuyFood = (food) => {
    this.props.buyFood(food);
    console.log(food.name)
  }

  render(){
    console.log(this.props);
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
                </Link> : null 
              }
              <a onClick={() => this.handleBuyBeer(beer)}>Buy</a>
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
            <a onClick={() => this.handleBuyFood(food)}>Buy</a>
          </div>
        ))}
        <Cart beer={beer} food={food}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    food: state.firestore.ordered.food,
    beer: state.firestore.ordered.beers,
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buyBeer: (beer) => dispatch(buyBeer(beer)),
    buyFood: (food) => dispatch(buyFood(food))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
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

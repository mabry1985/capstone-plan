/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Beer from './Beer';
import Food from './Food';
import Profile from './Profile';
import Cart from './Cart';
import { addToCart } from './../actions/menuActions';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect, Link } from 'react-router-dom';
import './point-of-sale.css';


class PointOfSale extends React.Component {

  render(){
    const { beer, food, auth, profile } = this.props
    if (!auth.uid) return <Redirect to='/' />
    return (
      <div className="menu">
      <Profile/>
        {profile.admin ?
          <Link to={'/new'}>
            <td className="edit-beer-button">new</td>
          </Link> : null
        }
        <div id="menu-container">
          <div className="item-list">
            <div className="beer-list">
              <h2 className="beer-list-header">Beer</h2>
              <table className="rwd-table">
             

                  { beer && beer.map(beer => (
                    <div key={beer.id}>
                      <Beer key={beer.id} beer={beer} addToCart={this.props.addToCart} profile={profile} />
                    </div>
                  ))} 
              </table>
            </div>
            
            <div className="vl"></div>

            <div className="food-list">
              <h2 className="food-list-header">Food</h2>
                  { food && food.map(food => (
                    <div key={food.id}>
                      <Food key={food.id} addToCart={this.props.addToCart} food={food} profile={profile} />
                    </div>
                  ))}
            </div>
          </div>
          <div className="cart-list">
            <Cart profile={profile}/>
          </div>
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
    addToCart: (item) => dispatch(addToCart(item)),
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

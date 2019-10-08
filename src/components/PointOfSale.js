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
import { Redirect } from 'react-router-dom';
import './point-of-sale.css';


class PointOfSale extends React.Component {

  render(){
    const { beer, food, auth, profile } = this.props
    if (!auth.uid) return <Redirect to='/' />
    return (
      <div className="menu">

      <Profile/>
        <div class="row" id="menu-container">
          
          <div className="col-md-3 beer-list">
            <table border='0' cellspacing="15px" className="menu-table">
                <tbody className="menu-tbody">
                { beer && beer.map(beer => (
                  <div key={beer.id}>
                    <Beer key={beer.id} beer={beer} profile={profile} />
                    <a onClick={() => this.props.addToCart(beer)}>Buy</a>
                  </div>
                ))}
                </tbody>
            </table>
          </div>

          <div className="col-md-3 food-list">
            <table border='0' id="menu-table-food">
              <tbody className="menu-tbody">
                { food && food.map(food => (
                  <div key={food.id}>
                    <Food key={food.id} food={food} profile={profile} />
                    <a onClick={() => this.props.addToCart(food)}>Buy</a>
                  </div>
                ))}
              </tbody>
            </table>
          </div>
          <tbody className="menu-tbody">
          <Cart/>
          </tbody>
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

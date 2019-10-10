import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removeFromCart, checkout } from './../actions/menuActions'
import './cart.css'

export class Cart extends Component {

  total() {
    return this.props.items.reduce((total, item) => {
      return total + parseInt(item.price)
    }, 0)
  }

  handleCheckout = (user, auth, total) => {
    this.props.checkout(user, auth, total)
  }

  render() {
    const { profile, auth } = this.props; 
    const header =  
      <div>
        <h1 className="cart-header">Cart</h1>
      </div>

    if (this.props.items.length === 0) {
      return <div id="cart">
        { header }
        <p className="cart-container">Select an item to add to cart.</p>
      </div>
    }
    return (
      <div id="cart" className="">
        {header}
        <div className="cart-container">
          {this.props.items.map((item, index) => {
            return ( 
             <div key={index}>
              {/* <td>{item.price}</td> */}
              <p id="cart-items" onClick={() => this.props.removeFromCart(index)}>{item.name}</p>
            </div>
            )
          })}
          </div>
      <p>Total: ${this.total()}</p>
      <button id="checkout" onClick={() => this.handleCheckout(profile, auth, this.total())}>Checkout</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.menu.cart,
    auth: state.firebase.auth,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (index) => dispatch(removeFromCart(index)),
    checkout: (profile, auth, total) => dispatch(checkout(profile, auth, total))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)

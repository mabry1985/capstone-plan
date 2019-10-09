import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removeFromCart, checkout } from './../actions/menuActions'

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
        <h1 style={{ color : 'white' }}>Cart</h1>
      </div>

    if (this.props.items.length === 0) {
      return <div id="cart">
        { header }
        <p style={{ color: 'white' }}>Select an item for more details and options to add to the cart.</p>
      </div>
    }
    return (
      <div id="cart" className="col-md-3">
        {header}
      <table border='0' className="menu-table">
        <tbody id="cart-tbody">
          {this.props.items.map((item, index) => {
            return <tr key={index}>
              <td>
                  <p onClick={() => this.props.removeFromCart(index)}
                     style={{ color: 'white' }}>
                    X
                  </p>
              </td>
              <td>{item.name}</td>
              <td>{item.price}</td>
            </tr>
          })}
        </tbody>
      </table>
      <p>Total: ${this.total()}</p>
      <button className="checkout" onClick={() => this.handleCheckout(profile, auth, this.total())}>Checkout</button>
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

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removeFromCart } from './../actions/menuActions'

export class Cart extends Component {

  total() {
    return this.props.items.reduce((total, item) => {
      return total + item.price
    }, 0)
  }

  render() {
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
      <div id="cart">
      <table border='0'>
        <tbody>
          {this.props.items.map((item, index) => {
            return <tr key={index}>
              <td>
                <button onClick={() =>this.props.removeFromCart(index)}>
                    X
                </button>
              </td>
              <td>{item.name}</td>
              <td>{item.price}</td>
            </tr>
          })}
        </tbody>
      </table>
      <p>Total: ${this.total()}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (item) => dispatch(removeFromCart(item)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)

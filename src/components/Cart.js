import React, { Component } from 'react'
import Beer from './Beer';

export class Cart extends Component {
  constructor(props){
    super(props);
    
    this.state ={
      total: 0,

    }
  }
  render() {
    const { beer, food } = this.props
    
    return (
      <div>
        <h1 style={{ color : 'white' }}>Cart</h1>
      </div>
    )
  }
}

export default Cart

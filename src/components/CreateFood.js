import React, { Component } from 'react';
import { createFood } from './../actions/menuActions.js';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class CreateFood extends Component {
  state = {
    name: '',
    description: '',
    price: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createFood(this.state)
    
  };

  render() {
    // const { auth } = this.props;
    // if (!auth.uid) return <Redirect to='/' />
    return (
      <div className="new-food-form">
        <form onSubmit={this.handleSubmit} className="">
          <h5 className="">New Food</h5>
          <div className="food-name-field">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" onChange={this.handleChange} placeholder="Name"/>
          </div>
          <div className="food-price-field">
            <label htmlFor="price">Price</label>
            <input id="price" className="" onChange={this.handleChange} placeholder="Price" />
          </div>
          <div className="food-description-field">
            <label htmlFor="description">Description</label>
            <textarea id="description" className="materialize-textarea" onChange={this.handleChange} placeholder="Description"/>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createFood: (food) => dispatch(createFood(food))
  }
}

export default connect(null, mapDispatchToProps)(CreateFood);
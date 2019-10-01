import React, { Component } from 'react';
import { createBeer } from './../actions/menuActions.js';
import { Redirect } from 'react-router-dom'

class CreateBeer extends Component {
  state = {
    name: '',
    brewery: '',
    from: '',
    style: '',
    abv: '',
    price: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit');

  };

  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/' />
    return (
      <div className="new-beer-form">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="">New Beer</h5>
          <div className="beer-name-field">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" onChange={this.handleChange} />
          </div>
          <div className="beer-price-field">
            <label htmlFor="price">Price</label>
            <input id="price" className="" onChange={this.handleChange} />
          </div>
          <div className="beer-brewery-field">
            <label htmlFor="brewery">Brewery</label>
            <input id="brewery" className="" onChange={this.handleChange} />
          </div>
          <div className="beer-from-field">
            <label htmlFor="from">From</label>
            <input id="from" className="" onChange={this.handleChange} />
          </div>
          <div className="beer-style-field">
            <label htmlFor="style">Style</label>
            <input id="style" className="" onChange={this.handleChange} />
          </div>
          <div className="beer-abv-field">
            <label htmlFor="abv">ABV</label>
            <input id="abv" className="" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateBeer;
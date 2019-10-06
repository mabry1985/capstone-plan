import React, { Component } from 'react';
import { createBeer } from './../actions/menuActions.js';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

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
    this.props.createBeer(this.state)
  };

  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/' />
    return (
      <div className="new-beer-form">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="">New Beer</h5>
          <div className="beer-name-field">
            <label className="a11y" htmlFor="name">Name</label>
            <input type="text" id="name" onChange={this.handleChange} placeholder="Name"/>
          </div>
          <div className="beer-price-field">
            <label className="a11y" htmlFor="price">Price</label>
            <input id="price" className="" onChange={this.handleChange} placeholder="Price"/>
          </div>
          <div className="beer-brewery-field">
            <label className="a11y" htmlFor="brewery">Brewery</label>
            <input id="brewery" className="" onChange={this.handleChange} placeholder="Brewery" />
          </div>
          <div className="beer-from-field">
            <label className="a11y" htmlFor="from">From</label>
            <input id="from" className="" onChange={this.handleChange} placeholder="From"/>
          </div>
          <div className="beer-style-field">
            <label className="a11y" htmlFor="style">Style</label>
            <input id="style" className="" onChange={this.handleChange} placeholder="Style"/>
          </div>
          <div className="beer-abv-field">
            <label className="a11y" htmlFor="abv">ABV</label>
            <input id="abv" className="" onChange={this.handleChange} placeholder="ABV"/>
          </div>
          <div className="input-field">
            <button className="">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createBeer: (beer) => dispatch(createBeer(beer))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateBeer);
import React, { Component } from 'react';
import { editBeer } from './../actions/menuActions.js';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { getFirestore } from 'redux-firestore';
import { firestoreConnect } from 'react-redux-firebase'

class EditBeer extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      name: '',
      brewery: '',
      from: '',
      style: '',
      abv: '',
      price: '',
      id: '',
    };
  };
  
  componentDidMount() {
    const firestore = getFirestore();
    const ref = firestore.collection('beers').doc (this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        const beer = doc.data();
      this.setState({
        name: beer.name,
        brewery: beer.brewery,
        from: beer.from,
        style: beer.style,
        abv: beer.abv,
        price: beer.price,
        id: this.props.match.params.id,
      })
      } else {
        console.log("No beer with that ID");
      }
    })
  }
  
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.editBeer(this.state)
  };
  
  delete = () => {
    const firestore = getFirestore();
    firestore.collection('beers').doc(this.props.match.params.id).delete().then(() => {
      console.log("Document successfully deleted!");
      this.props.history.push("/menu")
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  }

  render() {
    const { beer } = this.props;
    // const { auth } = this.props;
    // if (!auth.uid) return <Redirect to='/' />
    if (beer) {
      return (
        <div className="edit-beer-form">
          <form onSubmit={this.handleSubmit} className="white">
            <h5 className="">Edit</h5>
            <div className="beer-name-field">
              <label className="a11y" htmlFor="name">Name</label>
              <input type="text" id="name" onChange={this.handleChange} placeholder="Name" value={this.state.name} />
            </div>
            <div className="beer-price-field">
              <label className="a11y" htmlFor="price">Price</label>
              <input id="price" className="" onChange={this.handleChange} placeholder="Price" value={this.state.price} />
            </div>
            <div className="beer-brewery-field">
              <label className="a11y" htmlFor="brewery">Brewery</label>
              <input id="brewery" className="" onChange={this.handleChange} placeholder="Brewery" value={this.state.brewery}/>
            </div>
            <div className="beer-from-field">
              <label className="a11y" htmlFor="from">From</label>
              <input id="from" className="" onChange={this.handleChange} placeholder="From" value={this.state.from} />
            </div>
            <div className="beer-style-field">
              <label className="a11y" htmlFor="style">Style</label>
              <input id="style" className="" onChange={this.handleChange} placeholder="Style" value={this.state.style}/>
            </div>
            <div className="beer-abv-field">
              <label className="a11y" htmlFor="abv">ABV</label>
              <input id="abv" className="" onChange={this.handleChange} placeholder="ABV" value={this.state.abv} />
            </div>
              <button className="">Edit</button>
          </form>
          <button className="delete-food-button" onClick={this.delete}>Delete</button>
        </div>
      );
    } else {
      return (
        <div className="">
          <p>Loading...</p>
        </div>
      )
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editBeer: (beer) => dispatch(editBeer(beer))
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const beers = state.firestore.data.beers;
  const beer = beers ? beers[id] : null;
  return {
    beer: beer
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    {
      collection: 'beers',
    }
  ])
  )(EditBeer);
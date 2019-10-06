import React, { Component } from 'react';
import { editFood } from './../actions/menuActions.js';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { getFirestore } from 'redux-firestore';
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class EditFood extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      description: '',
      price: '',
      id: '',
    };
    
  };
  
  componentDidMount() {
    const firestore = getFirestore();
    const ref = firestore.collection('food').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        const food = doc.data();
        this.setState({
          name: food.name,
          description: food.description,
          price: food.price,
          id: this.props.match.params.id,
        })
      } else {
        console.log("No food with that ID");
      }
    })
  }
  
  delete = () => {
    const firestore= getFirestore();
    firestore.collection('food').doc(this.props.match.params.id).delete().then(() => {
      console.log("Document successfully deleted!");
      this.props.history.push("/menu")
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.editFood(this.state)

  };


  render() {
    // const { auth } = this.props;
    // if (!auth.uid) return <Redirect to='/' />
    return (
      <div className="edit-food-form">
        <form onSubmit={this.handleSubmit} className="">
          <h5 className="">New Food</h5>
          <div className="food-name-field">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" onChange={this.handleChange} placeholder="Name" value={this.state.name} />
          </div>
          <div className="food-price-field">
            <label htmlFor="price">Price</label>
            <input id="price" className="" onChange={this.handleChange} placeholder="Price" 
            value={this.state.price}/>
          </div>
          <div className="food-description-field">
            <label htmlFor="description">Description</label>
            <textarea id="description" className="materialize-textarea" onChange={this.handleChange} placeholder="Description" value={this.state.description}/>
          </div>
            <button className="edit-food-button">Edit</button>
          </form>
            <button className="delete-food-button" onClick={this.delete}>Delete</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editFood: (food) => dispatch(editFood(food))
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const foods = state.firestore.data.food;
  const food = foods ? foods[id] : null;
  return {
    food: food
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    {
      collection: 'food',
    }
  ])
)(EditFood);
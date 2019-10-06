import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';



const Beer = (props) => {
  const { beer } = props;
  const { auth } = props;
  if (!auth.uid) return <Redirect to='/' />
  return (
    <div className="menu-items" key={beer.id}>
      <h3>{beer.name} - {beer.abv}%</h3>
      <p><em>{beer.brewery}</em></p>
      <p>${beer.price}.00</p>
      <hr />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  }
}

export default connect(mapStateToProps)(Beer)

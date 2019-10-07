import React from 'react';
import CreateBeer from './CreateBeer';
import CreateFood from './CreateFood';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Profile from './Profile';

const NewMenuItems = (props) => {
  return(
    <div>
      <Profile />
      <CreateBeer />
      <CreateFood />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  }
}

export default connect(mapStateToProps)(NewMenuItems);
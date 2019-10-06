import React from 'react';
import CreateBeer from './CreateBeer';
import CreateFood from './CreateFood';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const NewMenuItems = (props) => {
  const { auth } = props;
  if (!auth.id) return <Redirect to='/' />
  return(
    <div>
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
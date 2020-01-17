import React, { useState, useEffect} from 'react';
import './App.css';
import { connect } from 'react-redux';
import Header from './components/Header';
import Home from './components/Home';

const mapStateToProps = state => ({
  appName : state.appName
});

function App(props) {
  return (
    <div>
      <Header appName={props.appName} />
      <Home />
      <h1>hello</h1>
      </div>
  );
}

export default connect(mapStateToProps, ()=> ({})) (App);

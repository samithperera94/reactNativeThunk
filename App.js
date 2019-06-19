
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Login from './src/screens/Login';
import Dash from './src/screens/Dashboard';

import {Provider} from 'react-redux';
import configStore from './src/redux/configStore';

import Navigation from './src/screens/Nav'

import { PersistGate } from 'redux-persist/integration/react';







export default class App extends Component {
  constructor(props) {

    super(props);
    
    this.state = {
    
    storeCreated: false,
    
    store: null,
    
    };
    
    }
    
    componentDidMount() {
    
    configStore()
    
    .then(({ persistor, store }) =>
    
    this.setState({ persistor, store, storeCreated: true })
    );
    
    }
    

  render() {
    if (!this.state.storeCreated) return null;

    return (
      <Provider store={this.state.store}>
      <PersistGate persistor={this.state.persistor}>

      <Navigation/>

      </PersistGate>
         
      </Provider>
    );
  }
}




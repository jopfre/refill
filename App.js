import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';

import reducer from './reducer';

import TheMap from './components/Map';

const store = createStore(reducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TheMap/>
      </Provider>
    );
  }
}

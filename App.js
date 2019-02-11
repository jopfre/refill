import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Provider } from 'react-redux';

import store from './store'

import TheMap from './components/Map';


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View>
          <TheMap style={{flex: 1}}/>
        </View>
      </Provider>
    );
  }
}

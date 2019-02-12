import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import { Provider } from 'react-redux';

import store from './store'

import { createStackNavigator, createAppContainer } from 'react-navigation';

import MapScreen from './screens/MapScreen';
import AddScreen from './screens/AddScreen';

const MainNavigator = createStackNavigator({
  Map: {screen: MapScreen},
  Add: {screen: AddScreen},
});

const AppContainer = createAppContainer(MainNavigator);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
	    	<AppContainer />
    	</Provider>
  	);
  }
}
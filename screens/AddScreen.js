import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';

import AddStationForm from '../components/AddStationForm';


export default class AddScreen extends Component {
  static navigationOptions = {
    title: 'Add Station',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <AddStationForm navigate={navigate}/>
        <Button
        title="View Map"
        onPress={() => navigate('Map')}
      />
      </View>
    );
  }
}
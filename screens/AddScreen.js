import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default  class AddScreen extends Component {
  static navigationOptions = {
    title: 'Add Station',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="View Map"
        onPress={() => navigate('Map')}
      />
    );
  }
}
import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import MapComponent from '../components/MapComponent';

export default class MapScreen extends Component {
  static navigationOptions = {
    title: 'Map',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={ styles.container }>
        <MapComponent style={ styles.container }></MapComponent>
        <Button 
          style={{ height: 50 }}
          title="Add Station"
          onPress={() => navigate('Add')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  }
});
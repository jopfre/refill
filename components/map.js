import React, { Component } from 'react';
import { Text } from 'react-native';

import { connect } from 'react-redux';

import MapView, { Marker, Callout } from 'react-native-maps';

 import { getMarkers } from '../actions';


class TheMap extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.props.getMarkers();
  }
    
  render() {
    return (
      <MapView
        style={{height: "100%"}}
        region={{
          latitude: 51.4545,
          longitude: -2.5879,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
        showsUserLocation={true}>
        <Marker coordinate={this.props.markers.coordinates}>
          <Callout>
            <Text>a</Text>
          </Callout>
        </Marker>
        {console.log(this.props.markers.coordinates)}
      </MapView>        
    );
  }
}

const mapStateToProps = state => ({
  // markers: {latitude: 51.4545, longitude: -2.5879}
  markers: state
});

const mapDispatchToProps = {
  getMarkers
};

export default connect(mapStateToProps, mapDispatchToProps)(TheMap);
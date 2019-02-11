import React, { Component } from 'react';
import { Text } from 'react-native';

import { connect } from 'react-redux';

import MapView, { Marker, Callout } from 'react-native-maps';

import { getMarkers } from '../actions';

class TheMap extends Component {
  constructor(props) {
    super(props);
    // this.props.getMarkers();
  }

  componentDidMount() {
    // this.props.getMarkers();
  }
    
  render() {
    const { markers } = this.props
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
        { 
          markers.map((marker, i) => {
            return (
              <Marker key={ marker.id } coordinate={ marker.coordinates }>
                <Callout>
                  <Text>{ marker.title }</Text>
                </Callout>
              </Marker> 
            )
          })
        }
      </MapView>        
    );
  }
}

const mapStateToProps = state => ({
  markers: state.markers
});

const mapDispatchToProps = {
  getMarkers
};

export default connect(mapStateToProps, mapDispatchToProps)(TheMap);
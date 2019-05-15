import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import MapView, { Marker, Callout } from 'react-native-maps';

import { setCenter } from '../actions';

export class MapComponent extends Component {
  constructor(props) {
    super(props);
    this.onRegionChangeCompleteHandler = this.onRegionChangeCompleteHandler.bind(this);
    this.renderMarkers = this.renderMarkers.bind(this);
  }

  onRegionChangeCompleteHandler(event) {
    this.props.dispatch(setCenter(event));
  }

  renderMarkers() {
    const { markers } = this.props
    // if (markers) {
      Object.keys(markers).map(function(key, index) {
        return (
          <Marker key={ key } coordinate={ markers[key].coordinates }>
            <Callout>
              <Text>{ markers[key].title }</Text>
            </Callout>
          </Marker> 
        )
      })
    // } else {
      // console.error('No markers in props. Are there markers in the db? Is the db connected?');
    // }

  }

  render() {
    return (
      <View style={ styles.container }>
        <MapView
          style={ styles.map }
          region={{
            latitude: 51.4545,
            longitude: -2.5879,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
          showsUserLocation={true}
          onRegionChangeComplete={this.onRegionChangeCompleteHandler}>
          { 
            
            this.renderMarkers()
          }
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  }
});

MapComponent.propTypes = {
  markers: PropTypes.object
};

const mapStateToProps = state => ({
  markers: state.map.markers
});

const mapDispatchToProps = dispatch => ({
  getMarkers
});

export default connect(mapStateToProps)(MapComponent);
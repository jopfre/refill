import React, { Component } from 'react';
import MapView, { Marker } from 'react-native-maps';

import { connect } from 'react-redux';

class TheMap extends Component {
  render() {
    return (
      <MapView
        style={{flex: 1}}
        region={{
          latitude: 51.4545,
          longitude: -2.5879,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
        showsUserLocation={true}>
        <Marker coordinate={{latitude: 51.4545, longitude: -2.5879}}/>
      </MapView>        
    );
  }
}

const mapStateToProps = state => {
  // let storedRepositories = state.repos.map(repo => ({ key: repo.id, ...repo }));
  return {
    // repos: storedRepositories
  };
};

const mapDispatchToProps = {
  // listRepos
};

export default connect(mapStateToProps, mapDispatchToProps)(TheMap);
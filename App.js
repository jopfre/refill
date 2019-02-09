import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import map from './components/map';
import MapView, { Marker } from 'react-native-maps';


// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Text</Text>
//       </View>
//     );
//   }
// }

export default class App extends Component {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import { Provider } from 'react-redux';

import store from './store'

import { createStackNavigator, createAppContainer } from 'react-navigation';

import MapScreen from './screens/MapScreen';



class ProfileScreen extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Button
        title="Go to Jane's profile"
        onPress={() => navigate('Profile', {name: 'Jane'})}
      />
    );
  }
}

const MainNavigator = createStackNavigator({
  Home: {screen: MapScreen},
  Profile: {screen: ProfileScreen},
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


// export default class App extends Component {
//   render() {
//     return (
//       <Provider store={store}>
//         <View>
//           <TheMap style={{flex: 1}}/>
//         </View>
//       </Provider>
//     );
//   }
// }
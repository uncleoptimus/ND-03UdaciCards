import React from 'react'
import { Button, Text, TouchableOpacity, View, Platform } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { StackNavigator } from 'react-navigation'
import { purple, white } from './utils/colors'
// import { FontAwesome, Ionicons } from '@expo/vector-icons'
// import { Constants } from 'expo'

import UdaciStatusBar from './components/UdaciStatusBar'

// const Tabs = TabNavigator({
//   History: {
//     screen: History,
//     navigationOptions: {
//       tabBarLabel: 'History',
//       tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
//     },
//   },
//   AddEntry: {
//     screen: AddEntry,
//     navigationOptions: {
//       tabBarLabel: 'Add Entry',
//       tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
//     },
//   },
//   Live: {
//     screen: Live,
//     navigationOptions: {
//       tabBarLabel: 'Live',
//       tabBarIcon: ({ tintColor }) => <Ionicons name='ios-speedometer' size={30} color={tintColor} />
//     }
//   }
// }, {
//   navigationOptions: {
//     header: null
//   },
//   tabBarOptions: {
//     activeTintColor: Platform.OS === 'ios' ? purple : white,
//     style: {
//       height: 56,
//       backgroundColor: Platform.OS === 'ios' ? white : purple,
//       shadowColor: 'rgba(0, 0, 0, 0.24)',
//       shadowOffset: {
//         width: 0,
//         height: 3
//       },
//       shadowRadius: 6,
//       shadowOpacity: 1
//     }
//   }
// })

const DummyScreen = (number) => {
  return (props) => (
    <View>
      <Text>Screen {number}: {number ? 'Secondary' : 'Home'}</Text>
      <TouchableOpacity
        onPress={() => props.navigation.navigate(
          number ? 'Home' : 'Secondary'
        )}
      >
        <Text>press here</Text>
      </TouchableOpacity>
    </View>
  )
}

const MainNavigator = StackNavigator({
  Home: {
    screen: DummyScreen(0),
    // screen: () => <Text>Screen 1</Text>
  },
  Secondary: {
    screen: DummyScreen(1),
    // screen: () => <Text>Screen 2</Text>,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      }
    }
  }
})

export default class AppRoot extends React.Component {
  // componentDidMount() {
  //   setLocalNotification()
  // }
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
          <UdaciStatusBar backgroundColor={purple} barStyle="light-content" />
          <MainNavigator />
        </View>
      </Provider>
    )
  }
}


// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Open up App.js to start working on your app!</Text>
//         <Text>Changes you make will automatically reload.</Text>
//         <Text>Shake your phone to open the developer menu.</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
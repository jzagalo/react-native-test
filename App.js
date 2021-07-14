import React from 'react';
import { Platform, StyleSheet } from 'react-native'
import { createBottomTabNavigator, CreateAppContainer } from 'react-navigation-tabs'
import { PeopleScreen } from './screens/PeopleScreen'
import { DecisionScreen } from './screens/DecisionScreen'
import { RestaurantsScreen } from './screens/RestaurantsScreen'
import Icon from 'react-native-vector-icons/FontAwesome'
import { createAppContainer } from 'react-navigation';

const platformOS = Platform.OS.toLowerCase()
let styles = {};

const tabs = createBottomTabNavigator({
  PeopleScreen: {
    screen: PeopleScreen,
    navigationOptions: {
      tabBarLabel: "People",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="user" color={tintColor} size={32} style={styles.marginTop} />
      )
    }
  },  
  DecisionScreen:{
    screen: DecisionScreen,
    navigationOptions: {
      tabBarLabel: "Decision",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="hourglass" color={tintColor} size={32} />
      )
    }
  },
  RestaurantsScreen: {
    screen: RestaurantsScreen,
    navigationOptions: {
      tabBarLabel: "Restaurants",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="university" color={tintColor} size={32} />
      )
    }
  }
})

styles = StyleSheet.create({
  iconStyle: {
    marginTop: 15
  }
})

const App = createAppContainer(tabs)

export default App

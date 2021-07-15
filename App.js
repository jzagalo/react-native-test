import React from 'react';
import 'react-native-gesture-handler';
import { View, Text } from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { PeopleScreen } from './screens/PeopleScreen'
import { DecisionScreen } from './screens/DecisionScreen'
import { RestaurantsScreen } from './screens/RestaurantsScreen'



const AppNavigator = createStackNavigator(
  { People: PeopleScreen, 
    Decision: DecisionScreen, 
    Restaurants: RestaurantsScreen 
  },
  { 
    initialRouteName: 'Restaurants',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }    
);

export default createAppContainer(AppNavigator);
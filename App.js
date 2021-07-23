import * as React from 'react';
import { View, Text, Image, Platform } from 'react-native';
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PeopleScreen } from './screens/PeopleScreen'
import { DecisionScreen } from './screens/DecisionScreen'
import { RestaurantsScreen } from './screens/RestaurantsScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';


const screenOptions = (route, color) => {
  let iconName = './images/manager.png';

  switch (route.name) {
    case 'People':
      iconName = require('./images/manager.png');
      break;
    case 'Restaurant':
      iconName = require('./images/restaurant.png');
      break;
    case 'Decision':
      iconName = require('./images/question-mark.png');
      break;
    default:
      return iconName
  }

  return <Image source={iconName} style={{ width : 32, height : 32 }} />
  
};

const Tab = createBottomTabNavigator();

function MyTabs(){
  return (
    <Tab.Navigator screenOptions={({route}) => ({
      tabBarIcon: ({color}) => screenOptions(route, color),     
    })}  initialRouteName="Decision" 
    swipeEnabled="true"
    backBehavior="none" 
    tabBarOptions={{ activeTintColor: 'tomato', inactiveTintColor: 'gray',
    style: {
      borderTopColor: '#66666666',
      padding: 5,
      backgroundColor: 'transparent',
      elevation: 0,
    } }}
     >
      <Tab.Screen name="People" component={PeopleScreen} />
      <Tab.Screen name="Decision" component={DecisionScreen} />
      <Tab.Screen name="Restaurant" component={RestaurantsScreen} />
    </Tab.Navigator>
  )
}

const Stack = createStackNavigator();

export default function App(){
  return(
    <NavigationContainer >
      <Stack.Navigator>          
        <Stack.Screen name="Tabs" component={MyTabs} />
      </Stack.Navigator>       
    </NavigationContainer>
  )
}


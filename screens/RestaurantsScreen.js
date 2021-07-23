import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import ListScreen from "../components/ListScreen"
import AddScreen from "../components/AddScreen"

const Stack = createStackNavigator();

export function RestaurantsScreen(){
  return(
    
      <Stack.Navigator headerMode="none" initialRouteName="ListScreen">          
        <Stack.Screen name="ListScreen" component={ListScreen} />
        <Stack.Screen name="AddScreen" component={AddScreen}  />
      </Stack.Navigator>       
    
  )
}



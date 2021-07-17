import * as React from 'react';
import { View, Text, Button, StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PeopleScreen } from './screens/PeopleScreen'
import { DecisionScreen } from './screens/DecisionScreen'
import { RestaurantsScreen } from './screens/RestaurantsScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';

function Demo() {
  return (
    <View style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }}>
      <Text>This is top text.</Text>
      <Text>This is bottom text.</Text>
    </View>
  );
}
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home">
          {() => (
            <Tab.Navigator initialRouteName="Analytics" >
              <Tab.Screen name="Analytics" component={Demo} />
              <Tab.Screen name="Profile" component={Demo} />
            </Tab.Navigator>
          )}
        </Stack.Screen>
        <Stack.Screen name="Settings" component={Demo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PeopleScreen } from './screens/PeopleScreen'
import { DecisionScreen } from './screens/DecisionScreen'
import { RestaurantsScreen } from './screens/RestaurantsScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createDrawerNavigator } from '@react-navigation/drawer';

function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function Feed({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.navigate("Home")} title="Profile" />
    </View>
  );
}

function Notifications({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.navigate("FeedGI")} title="Go back home" />
    </View>
  );
}

function Profile({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Settings')}
        title="Go to Settings"
      />
    </View>
  );
}

function Settings({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.navigate("Profile")} title="Profile" />
    </View>
  );
}




const Tab = createBottomTabNavigator();
const Stack = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Notifications" component={Notifications} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeTabs} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>     
    </NavigationContainer>
  );
}
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PeopleScreen } from './screens/PeopleScreen'
import { DecisionScreen } from './screens/DecisionScreen'
import { RestaurantsScreen } from './screens/RestaurantsScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Tab1 = () => (<Text> Tab 1 </Text>)
const Tab2 = () => (<Text> Tab 2 </Text>)
const Tab3 = () => (<Text> Tab 3 </Text>)

const screenOptionsNext =({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    if (route.name === 'Home') {
      iconName = focused
        ? 'ios-information-circle'
        : 'ios-information-circle-outline';
    } else if (route.name === 'Settings') {
      iconName = focused ? 'ios-list-box' : 'ios-list';
    }

    // You can return any component that you like here!
    return <Ionicons name={iconName} size={size} color={color} />;
  },
});

const tabBarOptions = {
  activeTintColor: 'tomato',
  inactiveTintColor: 'gray',
};

const MyTabs = () => {
  return (
      <Tab.Navigator screenOptions={screenOptionsNext} tabBarOptions={tabBarOptions}>
        <Tab.Screen name="Tab1" component={Tab1} />
        <Tab.Screen name="Tab2" component={Tab2} />
        <Tab.Screen name="Tab3" component={Tab3} />
      </Tab.Navigator>    
  )
}

const screenOptions = {
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeTab" screenOptions={screenOptions}>
        <Stack.Screen name="HomeTab" component={MyTabs} />
        <Stack.Screen name="People" component={PeopleScreen} options={{ title: 'My People' }} />
        <Stack.Screen name="Decision" component={DecisionScreen} 
            options={{          
              headerRight: () => (
                <Button
                  onPress={() => alert('This is a button!')}
                  title="Info"                  
                />
              ),
        }} />
        <Stack.Screen name="Restaurant" component={RestaurantsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
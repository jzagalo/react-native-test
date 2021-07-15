import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


export function RestaurantsScreen({ navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Restaurants Screen</Text>
      <Button title="Go to Decision"  onPress={() => navigation.push("Decision")}      />
    </View>
  );
}
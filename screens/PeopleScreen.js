import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


export function PeopleScreen({ navigation }) {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>People Screen</Text>
      
      <Button
        title="Go to Restaurant"
        onPress={() => navigation.navigate("Restaurant")}
      />
    </View>
  );
}


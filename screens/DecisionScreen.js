import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


export function DecisionScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Decision Screen</Text>
      <Button
        title="Go to People"
        onPress={() => navigation.navigate("People")}
      />
    </View>
  );
}
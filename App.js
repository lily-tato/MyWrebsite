import React, { Component } from 'react';
import HomeScreen from './screens/Home';
import IssLocationScreen from './screens/IssTracker';
import MeteorScreen from './screens/Meteor';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: true,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Meteor" component={MeteorScreen} />
        <Stack.Screen name="IssLocation" component={IssLocationScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App

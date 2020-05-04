// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Homepage from './src/pages/Homepage';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
        }}>
        <Stack.Screen name="Anasayfa" component={Homepage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
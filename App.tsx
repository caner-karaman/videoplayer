// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Homepage from './src/pages/Homepage';
import VideoDetail from './src/pages/VideoDetail';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{header: () => <></>}}
          name="Anasayfa"
          component={Homepage}
        />
        <Stack.Screen
          name="VideoDetail"
          component={VideoDetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

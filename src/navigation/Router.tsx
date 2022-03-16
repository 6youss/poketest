import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {PokelistScreen} from '../screens';

export type ScreensParamList = {
  PokelistScreen: undefined;
};

export const Stack = createNativeStackNavigator<ScreensParamList>();

export const Router: React.FC = () => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="PokelistScreen" component={PokelistScreen} />
      </Stack.Navigator>
    </>
  );
};

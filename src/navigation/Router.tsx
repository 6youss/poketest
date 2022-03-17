import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Pokemon} from '../components/PokemonsList/PokemonsList.queries';
import {PokeDetailScreen, PokelistScreen} from '../screens';

export type ScreensParamList = {
  PokelistScreen: undefined;
  PokeDetailScreen: Pokemon;
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
        <Stack.Screen name="PokeDetailScreen" component={PokeDetailScreen} />
      </Stack.Navigator>
    </>
  );
};

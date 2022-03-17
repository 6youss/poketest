import React from 'react';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {Pokemon} from '../components/PokemonsList/PokemonsList.queries';
import {PokeDetailScreen, PokelistScreen} from '../screens';

export type ScreensParamList = {
  PokelistScreen: undefined;
  PokeDetailScreen: Pokemon;
};

export const Stack = createSharedElementStackNavigator<ScreensParamList>();

export const Router: React.FC = () => {
  return (
    <>
      <Stack.Navigator
        initialRouteName="PokelistScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="PokelistScreen" component={PokelistScreen} />
        <Stack.Screen
          name="PokeDetailScreen"
          component={PokeDetailScreen}
          sharedElements={route => {
            const {id} = route.params as Pokemon;
            return [`pokemon.${id}.photo`];
          }}
        />
      </Stack.Navigator>
    </>
  );
};

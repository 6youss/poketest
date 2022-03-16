import React from 'react';
import {Text} from 'react-native';
import {usePokemons} from './PokelistScreen.queries';

export const PokelistScreen = () => {
  const {queriesResult} = usePokemons();

  return (
    <>
      <Text>PokelistScreen</Text>
      {queriesResult.map(query => {
        return <Text>{query.data?.name} </Text>;
      })}
    </>
  );
};

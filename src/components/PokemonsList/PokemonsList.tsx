import React from 'react';
import {FlatList} from 'react-native';
import {PokemonsListItem} from '../PokemonsListItem';
import {usePokemons} from './PokemonsList.queries';

interface PokemonsListProps {}

export const PokemonsList: React.FC<PokemonsListProps> = () => {
  const {queriesResult} = usePokemons();

  return (
    <>
      <FlatList
        data={queriesResult.filter(q => !!q.data)}
        keyExtractor={item => 'pokemon-' + item.data?.id}
        renderItem={({item}) => {
          return <PokemonsListItem key={item.data?.id} pokemon={item.data!} />;
        }}
      />
    </>
  );
};

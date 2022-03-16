import React from 'react';
import {FlatList} from 'react-native';
import {PokemonsListItem} from '../PokemonsListItem';
import {usePaginatedPokemons} from './PokemonsList.queries';

interface PokemonsListProps {}

export const PokemonsList: React.FC<PokemonsListProps> = () => {
  const {pokemons, fetchNextPage} = usePaginatedPokemons();

  return (
    <>
      <FlatList
        data={pokemons}
        keyExtractor={item => 'pokemon-' + item?.id}
        renderItem={({item}) => {
          return <PokemonsListItem pokemon={item!} />;
        }}
        onEndReached={() => {
          fetchNextPage();
        }}
      />
    </>
  );
};

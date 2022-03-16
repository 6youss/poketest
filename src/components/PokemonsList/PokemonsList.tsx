import React from 'react';
import {ActivityIndicator, FlatList} from 'react-native';
import {PokemonsListItem} from '../PokemonsListItem';
import {
  GameIndexSortOptions,
  usePaginatedPokemons,
} from './PokemonsList.queries';
import {styles} from './PokemonsList.styles';

interface PokemonsListProps {
  gameIndexSortValue?: GameIndexSortOptions;
}

export const PokemonsList: React.FC<PokemonsListProps> = ({
  gameIndexSortValue,
}) => {
  const {pokemons, isFetchingNextPage, fetchNextPage} =
    usePaginatedPokemons(gameIndexSortValue);

  const renderSpinner = () => {
    return <ActivityIndicator size={30} />;
  };

  return (
    <>
      <FlatList
        data={pokemons}
        keyExtractor={item => 'pokemon-' + item?.id}
        contentContainerStyle={styles.contentContainerStyle}
        columnWrapperStyle={styles.columnWrapperStyle}
        numColumns={2}
        renderItem={({item}) => {
          return <PokemonsListItem pokemon={item!} style={styles.renderItem} />;
        }}
        onEndReached={() => {
          fetchNextPage();
        }}
        ListFooterComponent={isFetchingNextPage ? renderSpinner : null}
      />
    </>
  );
};

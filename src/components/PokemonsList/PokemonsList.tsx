import React from 'react';
import {FlatList, ListRenderItem, View} from 'react-native';
import {PokeLoader} from '../PokeLoader';
import {PokemonsListItem} from '../PokemonsListItem';
import {ErrorView} from './ErrorView';
import {
  GameIndexSortOptions,
  Pokemon,
  usePaginatedPokemons,
} from './PokemonsList.queries';
import {styles} from './PokemonsList.styles';

interface PokemonsListProps {
  gameIndexSortValue?: GameIndexSortOptions;
  onPokemonPress?: (pokemon: Pokemon) => void;
}

export const PokemonsList: React.FC<PokemonsListProps> = ({
  gameIndexSortValue,
  onPokemonPress = () => {},
}) => {
  const {
    pokemons,
    isLoading,
    isFetchingNextPage,
    error,
    refetch,
    fetchNextPage,
  } = usePaginatedPokemons(gameIndexSortValue);

  const renderLoader = () => {
    return <PokeLoader />;
  };

  const renderItem: ListRenderItem<Pokemon> = ({item}) => {
    return (
      <PokemonsListItem
        key={item.id}
        pokemon={item!}
        style={styles.renderItem}
        onPress={onPokemonPress}
      />
    );
  };

  if (isLoading) {
    return <View style={styles.fillCentered}>{renderLoader()}</View>;
  }

  if (error) {
    return (
      <ErrorView
        onRetry={() => {
          refetch();
        }}
      />
    );
  }

  return (
    <FlatList
      data={pokemons}
      keyExtractor={item => 'pokemon-' + item?.id}
      contentContainerStyle={styles.contentContainerStyle}
      columnWrapperStyle={styles.columnWrapperStyle}
      numColumns={2}
      renderItem={renderItem}
      onEndReached={() => {
        fetchNextPage();
      }}
      ListFooterComponent={isFetchingNextPage ? renderLoader : null}
    />
  );
};

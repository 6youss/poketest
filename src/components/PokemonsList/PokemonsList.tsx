import React from 'react';
import {FlatList, ListRenderItem, View} from 'react-native';
import {PokeLoader} from '../PokeLoader';
import {PokemonsListItem} from '../PokemonsListItem';
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
  const {pokemons, isLoading, isFetchingNextPage, fetchNextPage} =
    usePaginatedPokemons(gameIndexSortValue);

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

  return (
    <>
      {isLoading ? (
        <View style={styles.loaderContainer}>{renderLoader()}</View>
      ) : (
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
      )}
    </>
  );
};

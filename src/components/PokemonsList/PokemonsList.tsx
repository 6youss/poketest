import React from 'react';
import {
  FlatList,
  Image,
  ListRenderItem,
  Pressable,
  Text,
  View,
} from 'react-native';
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

  if (error) {
    return (
      <View style={styles.fillCentered}>
        <Image
          source={require('../../assets/pikachu.png')}
          style={{width: 130, height: 130}}
        />
        <Text style={{color: '#333', fontWeight: 'bold', marginTop: 30}}>
          Oops ! an error has occured
        </Text>
        <Pressable
          onPress={() => {
            refetch();
          }}
          style={{
            padding: 20,
            backgroundColor: '#DDD',
            marginTop: 60,
            borderRadius: 15,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={{fontWeight: 'bold'}}>Tap to retry</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <>
      {isLoading ? (
        <View style={styles.fillCentered}>{renderLoader()}</View>
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

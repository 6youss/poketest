import React from 'react';
import {Image, Text, View, ViewStyle} from 'react-native';
import {Pokemon} from '../PokemonsList/PokemonsList.queries';
import {styles} from './PokemonsListItem.styles';

interface PokemonsListItemProps {
  pokemon: Pokemon;
  style?: ViewStyle;
}

export const PokemonsListItem: React.FC<PokemonsListItemProps> = ({
  pokemon,
  style,
}) => {
  return (
    <>
      <View style={[styles.container, style]}>
        <Image
          source={{uri: pokemon.sprites.front_default}}
          resizeMode="contain"
          style={styles.pokeImage}
        />
        <Text>{pokemon.name}</Text>
        <Text>{pokemon.game_indices[0].game_index}</Text>
      </View>
    </>
  );
};

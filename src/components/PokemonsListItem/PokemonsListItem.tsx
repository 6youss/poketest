import React from 'react';
import {Image, Pressable, Text, ViewStyle} from 'react-native';
import {Pokemon} from '../PokemonsList/PokemonsList.queries';
import {styles} from './PokemonsListItem.styles';

interface PokemonsListItemProps {
  pokemon: Pokemon;
  style?: ViewStyle;
  onPress: (pokemon: Pokemon) => void;
}

export const PokemonsListItem: React.FC<PokemonsListItemProps> = ({
  pokemon,
  style,
  onPress = () => {},
}) => {
  const handlePress = React.useCallback(() => {
    onPress(pokemon);
  }, [onPress, pokemon]);

  return (
    <>
      <Pressable style={[styles.container, style]} onPress={handlePress}>
        <Image
          source={{uri: pokemon.sprites.front_default}}
          resizeMode="contain"
          style={styles.pokeImage}
        />
        <Text style={styles.pokeName}>{pokemon.name}</Text>
        <Text style={styles.pokeIndex}>
          #{pokemon.game_indices[0].game_index}
        </Text>
      </Pressable>
    </>
  );
};

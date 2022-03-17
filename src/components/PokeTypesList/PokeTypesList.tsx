import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import Animated, {FadeInLeft} from 'react-native-reanimated';
import {PokemonType} from '../PokemonsList/PokemonsList.queries';

export interface PokeTypesListProps {
  types?: PokemonType[];
}

export const PokeTypesList: React.FC<PokeTypesListProps> = ({types = []}) => {
  return (
    <ScrollView horizontal contentContainerStyle={styles.scrollContainer}>
      {types.map((t, index) => {
        return (
          <Animated.View
            entering={FadeInLeft.delay((index + 1) * 300)}
            key={t.slot}
            style={styles.type}>
            <Text style={styles.typeTxt}>{t.type.name}</Text>
          </Animated.View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {paddingHorizontal: 30, paddingVertical: 15},
  type: {
    padding: 7,
    paddingHorizontal: 20,
    marginEnd: 15,
    backgroundColor: '#FFFA',
    borderRadius: 15,
    minWidth: 50,
    alignItems: 'center',
  },
  typeTxt: {
    textTransform: 'capitalize',
  },
});

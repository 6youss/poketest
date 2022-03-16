import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {PokemonsList} from '../../components';
import {styles} from './PokelistScreen.styles';

export const PokelistScreen = () => {
  return (
    <>
      <SafeAreaView>
        <View style={styles.pokeListContainer}>
          <PokemonsList />
        </View>
      </SafeAreaView>
    </>
  );
};

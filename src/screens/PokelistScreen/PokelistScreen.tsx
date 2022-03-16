import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {PokemonsList} from '../../components';
import {styles} from './PokelistScreen.styles';

export const PokelistScreen = () => {
  return (
    <>
      <SafeAreaView>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Poketest</Text>
        </View>
        <PokemonsList />
      </SafeAreaView>
    </>
  );
};

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Button, Image, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SharedElement} from 'react-navigation-shared-element';
import {ScreensParamList} from '../../navigation/Router';

type PokeDetailScreenProps = NativeStackScreenProps<
  ScreensParamList,
  'PokeDetailScreen'
>;

export const PokeDetailScreen: React.FC<PokeDetailScreenProps> = ({
  navigation,
  route,
}) => {
  const pokemon = route.params;
  return (
    <>
      <View style={{alignItems: 'center'}}>
        <SharedElement id={`pokemon.${pokemon.id}.photo`}>
          <Image
            source={{uri: pokemon.sprites.front_default}}
            style={{width: 270, height: 270}}
          />
        </SharedElement>
      </View>
      <Text>{JSON.stringify(pokemon)}</Text>
    </>
  );
};

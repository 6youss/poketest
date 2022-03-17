import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Text} from 'react-native';
import {ScreensParamList} from '../../navigation/Router';

type PokeDetailScreenProps = NativeStackScreenProps<
  ScreensParamList,
  'PokeDetailScreen'
>;

export const PokeDetailScreen: React.FC<PokeDetailScreenProps> = ({route}) => {
  const params = route.params;
  return (
    <>
      <Text>{JSON.stringify(params)}</Text>
    </>
  );
};

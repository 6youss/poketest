import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import Animated, {FadeIn} from 'react-native-reanimated';
import {SharedElement} from 'react-navigation-shared-element';
import {GoBackHeader, PokeRadarChart, PokeTypesList} from '../../components';
import {ScreensParamList} from '../../navigation/Router';
import {InfoTitle} from './InfoTitle';
import {OverviewItem} from './OverviewItem';
import {styles} from './PokeDetailScreen.styles';

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
    <View>
      <Animated.View
        entering={FadeIn.duration(600)}
        style={styles.pokeFadeFill}
      />
      <ScrollView>
        <GoBackHeader
          onGoBack={() => {
            navigation.goBack();
          }}
        />
        <View style={{paddingHorizontal: 30}}>
          <Text style={styles.pokeName}>{pokemon.name}</Text>
        </View>
        <PokeTypesList types={pokemon.types} />
        <View style={{alignItems: 'center'}}>
          <SharedElement id={`pokemon.${pokemon.id}.photo`}>
            <FastImage
              source={{uri: pokemon.sprites.front_default}}
              resizeMode="cover"
              style={{width: 250, height: 250}}
            />
          </SharedElement>
        </View>

        <View style={styles.infosContainer}>
          <View style={{marginBottom: 20}}>
            <InfoTitle>Overview</InfoTitle>
            <OverviewItem title="Height" value={pokemon.height.toString()} />
            <OverviewItem title="Weight" value={pokemon.weight.toString()} />
          </View>
          <View style={{marginBottom: 20}}>
            <InfoTitle>Base Stats</InfoTitle>
            <View style={styles.radarChartContainer}>
              <PokeRadarChart stats={pokemon.stats} width={330} />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

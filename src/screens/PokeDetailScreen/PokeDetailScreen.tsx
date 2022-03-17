import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import Animated, {FadeIn, FadeInLeft} from 'react-native-reanimated';
import {SharedElement} from 'react-navigation-shared-element';
import {GoBackHeader, PokeRadarChart} from '../../components';
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
    <View>
      <Animated.View
        entering={FadeIn.duration(600)}
        style={{...StyleSheet.absoluteFill, backgroundColor: '#DDD'}}
      />
      <ScrollView>
        <GoBackHeader
          onGoBack={() => {
            navigation.goBack();
          }}
        />
        <View style={{paddingHorizontal: 30}}>
          <Text
            style={{
              textTransform: 'capitalize',
              fontSize: 26,
              fontWeight: 'bold',
            }}>
            {pokemon.name}
          </Text>
        </View>
        <ScrollView
          horizontal
          contentContainerStyle={{paddingHorizontal: 30, paddingVertical: 15}}>
          {pokemon.types.map((t, index) => {
            return (
              <Animated.View
                entering={FadeInLeft.delay((index + 1) * 300)}
                key={t.slot}
                style={{
                  padding: 7,
                  paddingHorizontal: 20,
                  marginEnd: 15,
                  backgroundColor: '#FFFA',
                  borderRadius: 15,
                  minWidth: 50,
                  alignItems: 'center',
                }}>
                <Text style={{textTransform: 'capitalize'}}>{t.type.name}</Text>
              </Animated.View>
            );
          })}
        </ScrollView>
        <View style={{alignItems: 'center'}}>
          <SharedElement id={`pokemon.${pokemon.id}.photo`}>
            <FastImage
              source={{uri: pokemon.sprites.front_default}}
              resizeMode="cover"
              style={{width: 250, height: 250}}
            />
          </SharedElement>
        </View>

        <View
          style={{
            backgroundColor: 'white',
            padding: 30,
            borderTopEndRadius: 25,
            borderTopStartRadius: 25,
          }}>
          <View style={{marginBottom: 20}}>
            <Text
              style={{
                fontSize: 17,
                fontWeight: '500',

                marginBottom: 15,
              }}>
              Overview
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{marginVertical: 7, color: '#666'}}>Height</Text>
              <Text style={{fontWeight: 'bold', marginStart: 20}}>
                {pokemon.height}
              </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{marginVertical: 7, color: '#666'}}>Weight</Text>
              <Text style={{fontWeight: 'bold', marginStart: 20}}>
                {pokemon.weight}
              </Text>
            </View>
          </View>
          <View style={{marginBottom: 20}}>
            <Text style={{fontSize: 17, fontWeight: '500'}}>Base Stats</Text>
            <View style={{flex: 1, alignItems: 'center'}}>
              <PokeRadarChart stats={pokemon.stats} width={330} />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

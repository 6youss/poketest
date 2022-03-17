import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import Animated, {FadeIn, FadeInLeft} from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {SharedElement} from 'react-navigation-shared-element';
import {PokeRadarChart} from '../../components';
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
  const {top} = useSafeAreaInsets();
  return (
    <View>
      <Animated.View
        entering={FadeIn.duration(600)}
        style={{...StyleSheet.absoluteFill, backgroundColor: '#DDD'}}
      />
      <ScrollView>
        <View
          style={{
            paddingTop: top,
            width: '100%',
            paddingHorizontal: 30,
            paddingVertical: 15,
          }}>
          <Pressable
            style={{padding: 7}}
            onPress={() => {
              navigation.goBack();
            }}>
            <Image
              source={require('../../assets/back.png')}
              style={{width: 25, height: 25}}
            />
          </Pressable>
        </View>
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
                entering={FadeInLeft.delay((index + 1) * 200)}
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
              style={{width: 270, height: 270}}
            />
          </SharedElement>
        </View>

        <View
          style={{
            height: 3000,
            backgroundColor: 'white',
            padding: 30,
            borderTopEndRadius: 25,
            borderTopStartRadius: 25,
          }}>
          <View style={{flex: 1, alignItems: 'center'}}>
            <PokeRadarChart stats={pokemon.stats} width={330} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

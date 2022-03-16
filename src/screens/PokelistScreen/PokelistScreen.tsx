import React from 'react';
import {Image, Modal, Pressable, SafeAreaView, Text, View} from 'react-native';
import {PokemonsList, RadioInput} from '../../components';
import {GameIndexSortOptions} from '../../components/PokemonsList/PokemonsList.queries';
import {styles} from './PokelistScreen.styles';

export const PokelistScreen = () => {
  const [filtersVisible, setFiltersVisible] = React.useState(false);
  const [gameIndexSortValue, setGameIndexSortValue] =
    React.useState<GameIndexSortOptions>();
  return (
    <>
      <SafeAreaView>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Poketest</Text>
          <Pressable
            onPress={() => {
              setFiltersVisible(true);
            }}
            style={{backgroundColor: 'gray', padding: 7, borderRadius: 7}}>
            <Image
              style={{width: 30, height: 30}}
              source={require('../../assets/filter.png')}
            />
          </Pressable>
        </View>
        <PokemonsList gameIndexSortValue={gameIndexSortValue} />
        <Modal visible={filtersVisible} transparent animationType="fade">
          <Pressable
            onPress={() => {
              setFiltersVisible(false);
            }}
            style={{
              flex: 1,
              backgroundColor: '#0005',
              justifyContent: 'flex-end',
            }}>
            <Pressable
              style={{
                height: '50%',
                backgroundColor: 'white',
                borderTopEndRadius: 10,
                borderTopStartRadius: 10,
                alignItems: 'center',
                padding: 30,
              }}>
              <Text style={{marginBottom: 30, fontSize: 17, fontWeight: '500'}}>
                Sort by game's Pokédex
              </Text>
              <View style={{width: '100%'}}>
                <RadioInput
                  onChange={value => {
                    if (value === gameIndexSortValue) {
                      setGameIndexSortValue(undefined);
                      return;
                    }
                    setGameIndexSortValue(value);
                  }}
                  value={gameIndexSortValue}
                  items={[
                    {value: GameIndexSortOptions.BIGGER_INDEX, label: 'Bigger'},
                    {
                      value: GameIndexSortOptions.SMALLER_INDEX,
                      label: 'Smaller',
                    },
                  ]}
                />
              </View>
            </Pressable>
          </Pressable>
        </Modal>
      </SafeAreaView>
    </>
  );
};

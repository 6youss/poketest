import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {
  BottomModal,
  OptionsButton,
  PokemonsList,
  RadioInput,
} from '../../components';
import {
  GameIndexSortOptions,
  Pokemon,
} from '../../components/PokemonsList/PokemonsList.queries';
import {ScreensParamList} from '../../navigation/Router';
import {styles} from './PokelistScreen.styles';

type PokelistScreenProps = NativeStackScreenProps<
  ScreensParamList,
  'PokelistScreen'
>;

export const PokelistScreen: React.FC<PokelistScreenProps> = ({navigation}) => {
  const [filtersVisible, setFiltersVisible] = React.useState(false);
  const [gameIndexSortValue, setGameIndexSortValue] =
    React.useState<GameIndexSortOptions>();

  const handleFiltersChange = React.useCallback(
    value => {
      if (value === gameIndexSortValue) {
        setGameIndexSortValue(undefined);
      } else {
        setGameIndexSortValue(value);
      }
      setFiltersVisible(false);
    },
    [gameIndexSortValue],
  );
  const handlePokemonPress = React.useCallback(
    (pokemon: Pokemon) => {
      navigation.navigate('PokeDetailScreen', pokemon);
    },
    [navigation],
  );

  const SORT_OPTIONS = React.useMemo(() => {
    return [
      {value: GameIndexSortOptions.BIGGER_INDEX, label: 'Bigger'},
      {
        value: GameIndexSortOptions.SMALLER_INDEX,
        label: 'Smaller',
      },
    ];
  }, []);

  return (
    <>
      <SafeAreaView>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Poketest</Text>
          <OptionsButton
            active={!!gameIndexSortValue}
            onPress={() => {
              setFiltersVisible(true);
            }}
          />
        </View>
        <PokemonsList
          gameIndexSortValue={gameIndexSortValue}
          onPokemonPress={handlePokemonPress}
        />
        <BottomModal
          visible={filtersVisible}
          onClose={() => {
            setFiltersVisible(false);
          }}>
          <Text style={styles.sortByTxt}>Sort by game's Pokédex</Text>
          <View style={styles.sortInputContainer}>
            <RadioInput
              onChange={handleFiltersChange}
              value={gameIndexSortValue}
              items={SORT_OPTIONS}
            />
          </View>
        </BottomModal>
      </SafeAreaView>
    </>
  );
};

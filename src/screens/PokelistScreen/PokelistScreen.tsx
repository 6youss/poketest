import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {
  BottomModal,
  OptionsButton,
  PokemonsList,
  RadioInput,
} from '../../components';
import {GameIndexSortOptions} from '../../components/PokemonsList/PokemonsList.queries';
import {styles} from './PokelistScreen.styles';

export const PokelistScreen = () => {
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
        <PokemonsList gameIndexSortValue={gameIndexSortValue} />
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

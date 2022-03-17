import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  pokeName: {
    textTransform: 'capitalize',
    fontSize: 26,
    fontWeight: 'bold',
  },
  pokeFadeFill: {...StyleSheet.absoluteFillObject, backgroundColor: '#DDD'},
  infosContainer: {
    backgroundColor: 'white',
    padding: 30,
    borderTopEndRadius: 25,
    borderTopStartRadius: 25,
  },
  radarChartContainer: {flex: 1, alignItems: 'center'},
});

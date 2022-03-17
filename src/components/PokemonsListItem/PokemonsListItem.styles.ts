import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    padding: 7,
    backgroundColor: '#DDD',
    borderRadius: 20,
    marginVertical: 20,
  },
  pokeImage: {
    width: '100%',
    height: 130,
  },
  pokeName: {
    fontSize: 19,
    textTransform: 'capitalize',
    fontWeight: '500',
  },
  pokeIndex: {
    marginVertical: 7,
    opacity: 0.4,
    fontWeight: 'bold',
  },
});

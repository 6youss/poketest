import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  renderItem: {width: '45%'},
  columnWrapperStyle: {justifyContent: 'space-between'},
  contentContainerStyle: {paddingHorizontal: 20, paddingBottom: 70},
  fillCentered: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  retryBtn: {
    padding: 20,
    backgroundColor: '#DDD',
    marginTop: 60,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  errorOccuredTxt: {color: '#333', fontWeight: 'bold', marginTop: 30},
});

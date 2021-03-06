import React from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';

export interface OptionsButtonProps {
  onPress: () => void;
  active?: boolean;
}

export const OptionsButton: React.FC<OptionsButtonProps> = ({
  onPress = () => {},
  active = false,
}) => {
  return (
    <Pressable
      onPress={() => {
        onPress();
      }}
      style={styles.container}>
      <Image style={styles.image} source={require('../../assets/filter.png')} />
      {active && <View style={styles.active} />}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {backgroundColor: 'gray', padding: 7, borderRadius: 7},
  image: {width: 30, height: 30},
  active: {
    width: 8,
    height: 8,
    borderRadius: 10,
    backgroundColor: 'red',
    position: 'absolute',
    bottom: 11,
    start: 12,
    borderWidth: 2,
    borderColor: 'white',
  },
});

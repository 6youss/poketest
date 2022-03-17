import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export interface PokeLoaderProps {
  size?: number;
}

export const PokeLoader: React.FC<PokeLoaderProps> = ({size = 50}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/avatar.png')}
        style={{width: size, height: size}}
      />
      <Text>Catching them all ...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    padding: 30,
    opacity: 0.6,
  },
});

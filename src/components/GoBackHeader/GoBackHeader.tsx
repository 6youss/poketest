import React from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export interface GoBackHeaderProps {
  onGoBack: () => void;
}

export const GoBackHeader: React.FC<GoBackHeaderProps> = ({
  onGoBack = () => {},
}) => {
  const {top} = useSafeAreaInsets();
  return (
    <View style={[styles.container, {paddingTop: top}]}>
      <Pressable
        testID="goBackButton"
        style={styles.goBackButton}
        onPress={() => {
          onGoBack();
        }}>
        <Image
          source={require('../../assets/back.png')}
          style={styles.goBackImg}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
  goBackButton: {padding: 7},
  goBackImg: {width: 25, height: 25},
});

import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {styles} from './PokemonsList.styles';

interface ErrorViewProps {
  onRetry: () => void;
}
export const ErrorView: React.FC<ErrorViewProps> = ({onRetry = () => {}}) => {
  return (
    <View style={styles.fillCentered}>
      <Image
        source={require('../../assets/pikachu.png')}
        style={{width: 130, height: 130}}
      />
      <Text style={styles.errorOccuredTxt}>Oops ! an error has occured</Text>
      <Pressable
        onPress={() => {
          onRetry();
        }}
        style={styles.retryBtn}>
        <Text style={{fontWeight: 'bold'}}>Tap to retry</Text>
      </Pressable>
    </View>
  );
};

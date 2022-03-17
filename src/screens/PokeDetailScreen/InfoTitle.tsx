import React from 'react';
import {Text} from 'react-native';

export const InfoTitle: React.FC = ({children}) => {
  return (
    <Text
      style={{
        fontSize: 17,
        fontWeight: '500',
        marginBottom: 15,
      }}>
      {children}
    </Text>
  );
};

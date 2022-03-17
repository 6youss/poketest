import React from 'react';
import {Text, View} from 'react-native';

interface OverviewItemProps {
  title: string;
  value: string;
}
export const OverviewItem: React.FC<OverviewItemProps> = ({title, value}) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Text style={{marginVertical: 7, color: '#666'}}>{title}</Text>
      <Text style={{fontWeight: 'bold', marginStart: 20}}>{value}</Text>
    </View>
  );
};

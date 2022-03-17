import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {RadioItem, RadioTouchableItem} from './RadioTouchableItem';

export interface RadioInputProps {
  items: RadioItem[];
  value: RadioItem['value'];
  error?: string;
  onChange?: (item: RadioItem['value']) => void;
  style?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
}

export const RadioInput: React.FC<RadioInputProps> = ({
  items = [],
  value,
  style,
  containerStyle,
  onChange = () => {},
}) => {
  return (
    <View style={containerStyle}>
      <View style={[styles.container, style]}>
        {items.map((item, index) => (
          <RadioTouchableItem
            key={index}
            item={item}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{marginEnd: index < items.length - 1 ? 20 : undefined}}
            isSelected={item.value === value}
            onPress={() => {
              onChange(item.value);
            }}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flexDirection: 'row', justifyContent: 'space-between'},
});

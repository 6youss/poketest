import React from 'react';
import {Pressable, PressableProps, Text} from 'react-native';
import {StyleSheet} from 'react-native';
export interface RadioItem<T = any> {
  value: T;
  label: string;
}

export interface RadioTouchableItemProps extends PressableProps {
  item: RadioItem;
  isSelected: boolean;
}

export const RadioTouchableItem: React.FC<RadioTouchableItemProps> = ({
  item,
  isSelected,
  style,
  ...props
}) => {
  return (
    <Pressable
      style={[
        styles.touchableItem,
        isSelected && styles.selectedTouchableItem,
        style as any,
      ]}
      {...props}>
      <Text>{item.label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  touchableItem: {
    backgroundColor: '#DDD',
    borderRadius: 30,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  selectedTouchableItem: {borderWidth: 2, borderColor: 'gray'},
});

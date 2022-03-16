import React from 'react';
import {
  Pressable,
  PressableProps,
  StyleProp,
  Text,
  View,
  ViewStyle,
} from 'react-native';

export interface RadioItem<T = any> {
  value: T;
  label: string;
}

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
      <View
        style={[
          {flexDirection: 'row', justifyContent: 'space-between'},
          style,
        ]}>
        {items.map((item, index) => (
          <RadioTouchableItem
            key={index}
            item={item}
            style={{marginEnd: index < items.length - 1 ? 7 : undefined}}
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
        {
          backgroundColor: '#DDD',
          borderRadius: 30,
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          height: 50,
        },
        isSelected && {borderWidth: 2, borderColor: 'gray'},
        style as any,
      ]}
      {...props}>
      <Text>{item.label}</Text>
    </Pressable>
  );
};

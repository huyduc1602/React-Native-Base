import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants/theme';

const Button = props => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => props.onPress && props.onPress()}
      style={[
        {
          ...props.style,
          backgroundColor: props.color ? props.color : COLORS.backgroundButton,
          paddingHorizontal: SIZES.paddingHorizontalButton,
          paddingVertical: SIZES.paddingVerticalButton,
          borderRadius: props.btnSquare
            ? 0
            : props.btnRounded
            ? 30
            : SIZES.radius,
          alignItems: 'center',
        },
      ]}>
      <Text
        style={[
          {...FONTS.h6, color: COLORS.white},
          props.textColor && {color: props.textColor},
        ]}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

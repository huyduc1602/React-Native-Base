import React, {useState} from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import { FONTS, ICONS, SIZES, COLORS } from '../../constants/theme';
import {SvgXml} from 'react-native-svg';

const InputLogin = props => {
  const {colors} = useTheme();

  const [passwordShow, setPasswordShow] = useState(true);

  const handndleShowPassword = () => {
    setPasswordShow(!passwordShow);
  };

  return (
    <>
      <View style={{position: 'relative', justifyContent: 'center'}}>
        <TextInput
          secureTextEntry={props.type === 'password' ? passwordShow : false}
          style={[
            {
              ...FONTS.font,
              fontSize: SIZES.fontLg,
              borderWidth: 1,
              borderColor: COLORS.borderLogin,
              borderRadius: SIZES.radius,
              paddingVertical: SIZES.paddingVerticallInput,
              paddingHorizontal: SIZES.paddingHorizontalInput,
            },
            props.inputLg && {
              paddingVertical: 18,
            },
            props.inputSm && {
              paddingVertical: 7,
            },
            props.inputRounded && {
              borderRadius: 30,
            },
            props.inputBorder && {
              borderWidth: 0,
              borderBottomWidth: 1,
              borderRadius: 0,
            },
          ]}
          placeholderTextColor={COLORS.white}
          color={COLORS.white}
          placeholder={props.placeholder}
          onChangeText={props.onChangeText}
          //value={props.value}
        />
        {props.type === 'password' && (
          <TouchableOpacity
            accessible={true}
            accessibilityLabel="Password"
            accessibilityHint="Password show and hidden"
            onPress={() => handndleShowPassword()}
            style={styles.eyeIcon}>
            <SvgXml
              xml={passwordShow ? ICONS.eyeClose : ICONS.eyeOpen}
              fill={colors.white}
            />
          </TouchableOpacity>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  eyeIcon: {
    position: 'absolute',
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 0,
    zIndex: 1,
    top: 0,
  },
});

export default InputLogin;

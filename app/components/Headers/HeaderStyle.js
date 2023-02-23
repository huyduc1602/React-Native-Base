/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {COLORS, FONTS} from '../../constants/theme';

import userImg from '../../assets/images/user.png';
import hambugerImg from '../../assets/images/hambuger.png';
import DropShadow from 'react-native-drop-shadow';

const HeaderStyle = props => {
  const {colors} = useTheme();

  return (
    <>
      <View
        style={{
          height: 50,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 5,
        }}>
        <TouchableOpacity
          onPress={() => props.drawer.current.openDrawer()}
          style={{
            height: 50,
            width: 50,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            style={{
              height: 24,
              width: 24,
            }}
            tintColor={COLORS.primary}
            source={hambugerImg}
          />
        </TouchableOpacity>
        <Text
          style={{
            ...FONTS.h3,
            color: COLORS.primary,
            flex: 1,
            textAlign: 'center',
            fontStyle: 'bold',
          }}>
          {props.title}
        </Text>
        <View
          style={{
            height: 50,
            width: 50,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />
      </View>
    </>
  );
};

export default HeaderStyle;

/* eslint-disable react-native/no-inline-styles */
import React, {useRef} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {SvgXml} from 'react-native-svg';
import {useNavigation} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {COLORS, FONTS, ICONS, SIZES} from '../constants/theme';
import DropShadow from 'react-native-drop-shadow';

const Header = props => {
  //const drawerRef = useRef();
  const {colors} = useTheme();
  const navigation = useNavigation();

  return (
    <>
      <View
        style={[
          props.transparent && {
            position: 'absolute',
            zIndex: 1,
            width: '100%',
          },
        ]}>
        <View
          style={[
            {
              paddingHorizontal: 15,
              paddingVertical: 8,
              flexDirection: 'row',
              alignItems: 'center',
              borderBottomWidth: 1,
              borderColor: colors.borderColor,
            },
            props.transparent && {
              borderBottomWidth: 0,
            },
            props.bgWhite && {
              backgroundColor: colors.card,
              borderBottomWidth: 0,
              zIndex: 1,
            },
          ]}>
          {props.sideMenu && (
            <TouchableOpacity
              onPress={() => navigation.openDrawer()}
              style={{
                height: 48,
                width: 48,
                marginRight: 5,
                marginLeft: -8,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <FeatherIcon
                style={{bottom: 2}}
                color={colors.title}
                size={20}
                name="menu"
              />
            </TouchableOpacity>
          )}
          {props.leftIcon === 'close' && (
            <TouchableOpacity
              accessible={true}
              accessibilityLabel="Go back"
              accessibilityHint="Navigates to the previous screen"
              onPress={() => navigation.goBack()}
              style={{
                height: 45,
                width: 45,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: SIZES.radius,
                marginRight: 10,
              }}>
              <SvgXml
                height={30}
                width={30}
                stroke={colors.title}
                xml={ICONS.close}
              />
            </TouchableOpacity>
          )}
          {props.leftIcon === 'back' && (
            <TouchableOpacity
              onPress={() => {
                props.backNavigate
                  ? navigation.navigate(props.backNavigate)
                  : navigation.goBack();
              }}
              style={{
                height: 45,
                width: 45,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: SIZES.radius,
                marginRight: 10,
              }}>
              <MaterialIcons
                name="arrow-back"
                color={props.bgImage ? COLORS.white : colors.title}
                size={22}
              />
            </TouchableOpacity>
          )}
          <Text
            style={[
              FONTS.h4,
              {color: colors.title, flex: 1},
              props.bgImage && {color: COLORS.white},
              props.titleCenter && {textAlign: 'center', marginRight: 55},
            ]}>
            {props.title}
          </Text>
          {props.rightIcon2 === 'pages' && (
            <TouchableOpacity
              onPress={() => navigation.navigate('pages')}
              style={{
                height: 45,
                width: 45,
                marginRight: 10,
                backgroundColor: props.bgImage
                  ? 'rgba(255,255,255,.15)'
                  : COLORS.primayLight,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: SIZES.radius,
              }}>
              <FeatherIcon name="file" color={COLORS.primary} size={22} />
            </TouchableOpacity>
          )}
          {props.rightIcon === 'notification' && (
            <TouchableOpacity
              accessible={true}
              accessibilityLabel="Notifications"
              accessibilityHint="show notifications"
              onPress={() => navigation.navigate('Notification')}
              style={{
                height: 45,
                width: 45,
                backgroundColor: COLORS.primayLight,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: SIZES.radius,
              }}>
              <View
                style={{
                  height: 10,
                  width: 10,
                  backgroundColor: COLORS.secondary,
                  borderRadius: 5,
                  borderWidth: 2,
                  borderColor: '#FEEADF',
                  position: 'absolute',
                  top: 10,
                  right: 12,
                  zIndex: 1,
                }}
              />
              <SvgXml fill={COLORS.primary} xml={ICONS.notification} />
            </TouchableOpacity>
          )}
          {props.rightIcon === 'settings' && (
            <TouchableOpacity
              onPress={() => navigation.navigate('Settings')}
              style={{
                height: 45,
                width: 45,
                backgroundColor: props.bgImage
                  ? 'rgba(255,255,255,.15)'
                  : COLORS.primayLight,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: SIZES.radius,
              }}>
              <SvgXml
                stroke={props.bgImage ? COLORS.white : COLORS.primary}
                xml={ICONS.settings}
              />
            </TouchableOpacity>
          )}

          {props.rightIcon === 'next' && (
            <TouchableOpacity
              style={{
                height: 45,
                width: 45,
                backgroundColor: COLORS.primayLight,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: SIZES.radius,
              }}>
              <SvgXml stroke={COLORS.primary} xml={ICONS.arrowRight} />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </>
  );
};

export default Header;

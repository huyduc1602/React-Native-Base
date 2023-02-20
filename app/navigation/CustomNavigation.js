import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import home from "../assets/images/icons/home3.png";
import heart from "../assets/images/icons/heart2.png";
import image from "../assets/images/icons/Image.png";
import paper from "../assets/images/icons/Paper.png";
import setting from "../assets/images/icons/Setting.png";
import { COLORS, FONTS } from '../constants/theme';
import DropShadow from 'react-native-drop-shadow';
import Animated from 'react-native-reanimated';

const CustomNavigation = ({ state, navigation, descriptors }) => {

  const { colors } = useTheme();
  const theme = useTheme();

  return (
    <>
      <DropShadow
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          shadowColor: "#1630C2",
          shadowOffset: {
            width: 0,
            height: -10,
          },
          shadowOpacity: .18,
          shadowRadius: 5,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: colors.card,
            height: 55,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}
        >
          {state.routes.map((route, index) => {

            const { options } = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                  ? options.title
                  : route.name;

            const isFocused = state.index === index;

            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate({ name: route.name, merge: true });
              }
            }

            return (
              <View style={styles.tabItem} key={index}>
                <TouchableOpacity
                  style={styles.tabLink}
                  onPress={onPress}
                >
                  <Image
                    style={{
                      height: 22,
                      width: 22,
                      resizeMode: 'contain',
                      marginBottom: 4,
                      tintColor: isFocused ? COLORS.white : theme.dark ? COLORS.white : null,
                    }}
                    source={
                      label === "Components" ? heart :
                        label === "Media" ? image :
                          label === "Home" ? home :
                            label === "Pages" ? paper :
                              label === "Settings" && setting
                    }
                  />
                  <Text style={{ ...FONTS.fontXs, color: isFocused ? COLORS.white : "#838FD4" }}>{label === "Components" ? "Features" : label}</Text>
                </TouchableOpacity>
                <Animated.View
                  style={{
                    height: 64,
                    width: 68,
                    position: 'absolute',
                    backgroundColor: theme.dark ? COLORS.themeSecondary : COLORS.themePrimary,
                    zIndex: -1,
                    bottom: 0,
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                    opacity: isFocused ? 1 : 0,
                  }}
                ></Animated.View>
              </View>
            )
          })}
        </View>
      </DropShadow>
    </>
  );
};

const styles = StyleSheet.create({
  tabLink: {
    alignItems: 'center',
    padding: 15,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navText: {
    ...FONTS.fontSm,
  }
})


export default CustomNavigation;
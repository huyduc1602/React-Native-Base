import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { COLORS, FONTS } from '../../constants/theme';

import pic1 from '../../assets/images/stories/small/pic1.jpg';
import userImg from '../../assets/images/user.png';
import hambugerImg from '../../assets/images/hambuger.png';
import DropShadow from 'react-native-drop-shadow';

const HeaderStyle2 = (props) => {

    const { colors } = useTheme();

    return (
        <>
            <DropShadow
                style={{
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 2,
                        height: 2,
                    },
                    shadowOpacity: .1,
                    shadowRadius: 5,
                }}
            >
                <View style={{
                    height: 50,
                    backgroundColor: colors.cardBg,
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 5,
                    // shadowColor: "rgba(0,0,0,.6)",
                    // shadowOffset: {
                    //     width: 0,
                    //     height: 4,
                    // },
                    // shadowOpacity: 0.30,
                    // shadowRadius: 4.65,

                    // elevation: 8,
                }}>
                    <TouchableOpacity
                        onPress={() => props.drawer.current.openDrawer()}
                        style={{
                            height: 50,
                            width: 50,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        {/* <FeatherIcon color={colors.title} name='menu' size={32} /> */}
                        <Image
                            style={{
                                height: 24,
                                width: 24,
                            }}
                            source={hambugerImg}
                        />
                    </TouchableOpacity>
                    <Text style={{ ...FONTS.h6, color: colors.title, flex: 1, textAlign: 'center' }}>{props.title}</Text>
                    <TouchableOpacity
                        style={{
                            height: 50,
                            width: 50,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <View
                            style={{
                                position: 'absolute',
                                bottom: 8,
                                right: 8,
                                zIndex: 1,
                                borderWidth: 2,
                                borderColor: colors.card,
                                backgroundColor: COLORS.success,
                                height: 12,
                                width: 12,
                                borderRadius: 10,
                            }}
                        />
                        <Image
                            style={{
                                height: 32,
                                width: 32,
                                borderRadius: 20,
                            }}
                            source={userImg}
                        />
                    </TouchableOpacity>
                </View>
            </DropShadow>
        </>
    );
};



export default HeaderStyle2;
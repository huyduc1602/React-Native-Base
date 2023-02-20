import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { COLORS, FONTS, SIZES } from '../../constants/theme';

import pic1 from '../../assets/images/stories/small/pic1.jpg';
import userImg from '../../assets/images/user.png';

const HeaderStyle3 = (props) => {
    
    const {colors} = useTheme();

    return (
        <>
            <View style={{
                height:70,
                flexDirection:'row',
                alignItems:'center',
                paddingHorizontal:15,
            }}>
                <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                    <Image
                        source={userImg}
                        style={{
                            height:45,
                            width:45,
                            borderRadius:45,
                            marginRight:12,
                        }}
                    />
                    <View>
                        <Text style={{...FONTS.fontXs,...FONTS.fontBold,color:colors.text,marginBottom:2}}>Hello, John</Text>
                        <Text style={{...FONTS.font,...FONTS.fontBold,color:colors.title}}>Thursday, 10 Sep</Text>
                    </View>
                </View>
                <TouchableOpacity
                    style={{
                        height:45,
                        width:45,
                        borderWidth:1,
                        backgroundColor:colors.cardBg,
                        borderRadius:SIZES.radius,
                        borderColor:colors.borderColor,
                        alignItems:'center',
                        justifyContent:'center',
                    }}
                >
                    <View
                        style={{
                            position:'absolute',
                            zIndex:1,
                            height:10,
                            width:10,
                            top:11,
                            right:12,
                            borderRadius:8,
                            backgroundColor:COLORS.primary,
                            borderWidth:2,
                            borderColor:colors.card,
                        }}
                    />
                    <FeatherIcon name='bell' color={colors.title} size={20}/>
                </TouchableOpacity>
            </View>
        </>
    );
};



export default HeaderStyle3;
import React from 'react';
import { useTheme } from '@react-navigation/native';
import { View } from 'react-native';

const DividerIcon = (props) => {
    const {colors} = useTheme();
    return (
        <>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <View
                    style={{
                        borderBottomWidth:1, 
                        borderColor: props.color ? props.color : colors.borderColor,
                        borderStyle: props.dashed ? 'dashed' : 'solid',
                        marginTop:15,
                        marginBottom:15,
                        flex:1,
                        ...props.style,
                    }}
                />
                {
                    props.icon && 
                    <View style={{paddingHorizontal:10}}>

                        {props.icon}
                    </View>
                }
                <View
                    style={{
                        borderBottomWidth:1, 
                        borderColor: props.color ? props.color : colors.borderColor,
                        borderStyle: props.dashed ? 'dashed' : 'solid',
                        marginTop:15,
                        marginBottom:15,
                        flex:1,
                        ...props.style,
                    }}
                />
            </View>
        </>
    );
};


export default DividerIcon;
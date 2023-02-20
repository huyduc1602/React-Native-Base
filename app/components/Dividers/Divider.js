import React from 'react';
import { useTheme } from '@react-navigation/native';
import { View } from 'react-native';

const Divider = (props) => {
    const {colors} = useTheme();
    return (
        <>
            <View
                style={{
                    borderBottomWidth:1, 
                    borderColor: props.color ? props.color : colors.borderColor,
                    borderStyle: props.dashed ? 'dashed' : 'solid',
                    marginTop:15,
                    marginBottom:15,
                    ...props.style,
                }}
            />
        </>
    );
};


export default Divider;
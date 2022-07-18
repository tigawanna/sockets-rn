import React from 'react';
import { TextInput as RNTextInput, View, StyleSheet } from 'react-native';



export default function TextInput({ ...otherProps }:any) {
  const validationColor = '#223e4b';
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        height: "100%",
        width: "80%",
        borderRadius: 4,
        borderColor: validationColor,
        borderWidth: StyleSheet.hairlineWidth,
        padding:2
      }}
    >
   <View style={{ flex: 1,height:'100%',width:'100%' }}>
        <RNTextInput
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                height: "100%",
                width:'100%',
                borderColor:'black',
                borderWidth:2,
                borderStyle:'solid',
                borderRadius:5,
                padding:5,
              
              }}
          underlineColorAndroid='transparent'
          placeholderTextColor='rgba(34, 62, 75, 0.7)'
          {...otherProps}
        />
      </View>
    </View>
  );
}

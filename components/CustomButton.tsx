import React from 'react';
import { TouchableOpacity, Text} from 'react-native';
import { Ionicons as Icon } from '@expo/vector-icons';

interface ButtonProps{
label?:string  
icon?:any  
onPress?:any
color?:any
bgcolor?:any
}
export default function Button({ label,icon, onPress,color,bgcolor }:ButtonProps) {
  const buttontextcolor = color?color:"black"
  const buttonbg = bgcolor?bgcolor:null
  return (
    <TouchableOpacity
      style={{
        borderRadius: 8,
        height:50,
        borderColor:buttontextcolor,
        borderWidth:label?1:0,
        borderStyle:'solid',
        // width:'10%',
        paddingHorizontal:7,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:bgcolor
      
      }}
      activeOpacity={0.7}
      onPress={onPress}>

        {label?<Text style={{fontSize:15 , fontWeight:'bold',color:buttontextcolor}}>{label}</Text>:
        icon?<Icon name={icon} color={buttontextcolor} size={35}/>:
         <Text style={{fontSize:15 , fontWeight:'bold',color:buttontextcolor}}>Done</Text>}

    </TouchableOpacity>
  );
}

import React from 'react';
import { TouchableOpacity, Text} from 'react-native';
import { Ionicons as Icon } from '@expo/vector-icons';

interface ButtonProps{
icon:any  
onPress?:any
}
export default function Button({ icon, onPress }:ButtonProps) {
  return (
    <TouchableOpacity
      style={{
        borderRadius: 8,
        height:"100%",
        // width:'15%',
        padding:2,
        justifyContent: 'center',
        alignItems: 'center',
      
      }}
      activeOpacity={0.7}
      onPress={onPress}
    >
       <Icon name={icon} color={'black'} size={35}/>
    </TouchableOpacity>
  );
}

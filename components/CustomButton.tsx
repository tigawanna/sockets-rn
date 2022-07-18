import React from 'react';
import { TouchableOpacity, Text} from 'react-native';
import { Ionicons as Icon } from '@expo/vector-icons';

interface ButtonProps{
label?:string  
icon?:any  
onPress?:any
}
export default function Button({ label,icon, onPress }:ButtonProps) {
  return (
    <TouchableOpacity
      style={{
        borderRadius: 8,
        height:50,
        borderColor:'black',
        borderWidth:label?1:0,
        borderStyle:'solid',
        // width:'10%',
        paddingHorizontal:15,
        justifyContent: 'center',
        alignItems: 'center',
      
      }}
      activeOpacity={0.7}
      onPress={onPress}>

        {label?<Text style={{fontSize:15 , fontWeight:'bold',color:'black'}}>{label}</Text>:
        icon?<Icon name={icon} color={'black'} size={35}/>:
         <Text style={{fontSize:15 , fontWeight:'bold',color:'black'}}>Done</Text>}

    </TouchableOpacity>
  );
}

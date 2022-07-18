
import { StyleSheet, Text, View ,FlatList,KeyboardAvoidingView,Platform} from 'react-native'
import React from 'react'
import { useState } from 'react';
import ChatCard from './ChatCard';
import ChatInput from './ChatInput';

const messagelist=[
    {
        "newMessage": {
            "message": "leo",
            "time": "14:42:49",
            "user": "goper"
        }
    },
    {
        "newMessage": {
            "message": "salad eno mbaya leta drinkskual ",
            "time": "14:42:43",
            "user": "goper"
        }
    },
    {
        "newMessage": {
            "message": "salad eno mbaya leta drinks",
            "time": "14:42:40",
            "user": "goper"
        }
    },
    {
        "newMessage": {
            "message": "salad eno mbaya leta drinks",
            "time": "14:42:39",
            "user": "goper"
        }
    },
    {
        "newMessage": {
            "message": "salad eno mbaya",
            "time": "14:42:35",
            "user": "goper"
        }
    },
    {
        "newMessage": {
            "message": "salad",
            "time": "14:42:28",
            "user": "goper"
        }
    },
    {
        "newMessage": {
            "message": "salad",
            "time": "14:42:26",
            "user": "goper"
        }
    },
    {
        "newMessage": {
            "message": "salad",
            "time": "14:42:25",
            "user": "goper"
        }
    },
    {
        "newMessage": {
            "message": "leo",
            "time": "14:42:49",
            "user": "goper"
        }
    },
    {
        "newMessage": {
            "message": "salad eno mbaya leta drinkskual ",
            "time": "14:42:43",
            "user": "goper"
        }
    },
    {
        "newMessage": {
            "message": "salad eno mbaya leta drinks",
            "time": "14:42:40",
            "user": "goper"
        }
    },
    {
        "newMessage": {
            "message": "salad eno mbaya leta drinks",
            "time": "14:42:39",
            "user": "goper"
        }
    },
    {
        "newMessage": {
            "message": "salad eno mbaya",
            "time": "14:42:35",
            "user": "goper"
        }
    },
    {
        "newMessage": {
            "message": "salad",
            "time": "14:42:28",
            "user": "goper"
        }
    },
    {
        "newMessage": {
            "message": "salad",
            "time": "14:42:26",
            "user": "goper"
        }
    },
    {
        "newMessage": {
            "message": "salad",
            "time": "14:42:25",
            "user": "goper"
        }
    }
]

interface Message{
    message: string;
    time: string;
    user: string;
  }
interface ChatsProps{
user: { username: string; room: string;}
messages:any
sendMessage: (message:Message) => void
}

const Chats:React.FC<ChatsProps> = ({user,messages,sendMessage}) => {

  return (
    <View style={styles.container}>
      <Text>Chats</Text>
      <View
       style={styles.flatlist}>
      <FlatList
      keyExtractor={(item, index) => index.toString()}
      data={messages}
      renderItem={({item })=>(
      <ChatCard chat={item}/>
      )}
      />
      </View>
     <View style={styles.form}><ChatInput sendMessage={sendMessage} user={user}/></View>

    </View>
  )
}

export default Chats

const styles = StyleSheet.create({
    container: {
        flex:1,
        width: '100%',
        height:'100%',
        justifyContent:'space-between',
        alignItems:'center',
    
      },
      flatlist: {
        flex:.9,
        height:"100%",
        width:'100%',
        // backgroundColor:"purple",
       
    },
    form:{
        flex:.1,
        height:70,
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:5,
 
    }
})




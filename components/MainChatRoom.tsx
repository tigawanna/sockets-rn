import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState } from 'react';
import useChat from './../utils/useChat';
import Chats from './Chats';



interface MainChatRoomProps{
userExists:boolean    
setUserExists: React.Dispatch<React.SetStateAction<boolean>>
user:{username:string ; room:string}
}

const MainChatRoom:React.FC<MainChatRoomProps> = ({user,userExists,setUserExists}) => {

const {setRoom,room,messages,sendMessage} = useChat(user)

  return (
    <View style={styles.container}>
      <View style={styles.chats}>
      <Chats room={room} 
      messages={messages} sendMessage={sendMessage}
      setUserExists={setUserExists} setRoom ={setRoom} user={user}
      />
 
      </View>
    </View>
  )
}

export default MainChatRoom

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center',
        height:'100%',
        width:'100%'
    },

      chats: {
       backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-end',
        height:'100%',
        width:'100%',
      },
})

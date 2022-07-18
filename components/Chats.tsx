
import { StyleSheet, Text, View ,FlatList} from 'react-native'
import React from 'react'
import ChatCard from './ChatCard';
import ChatInput from './ChatInput';
import { Ionicons as Icon } from '@expo/vector-icons';
import { removeLocalDataValue } from '../utils/storage';



interface Message{
    message: string;
    time: string;
    user: string;
  }
interface ChatsProps{
room: { users: string; room: string;}
messages:any
sendMessage: (message:Message) => void
setRoom: React.Dispatch<any>
setUserExists: React.Dispatch<React.SetStateAction<boolean>>
user: { username: string; room: string;}

}

const Chats:React.FC<ChatsProps> = ({user,room,messages,sendMessage,setUserExists,setRoom}) => {

  return (
    <View style={styles.container}>
   <View
       style={styles.chatinfo}>
       <Icon name={"ios-exit-outline"} color={'black'} size={30} onPress={()=>{
        removeLocalDataValue()
        setUserExists(false)
        setRoom({room:"",user:""})

       }}/>  

      <Text style={{fontSize:16, fontWeight:'bold'}}>{room?.room}</Text>
      <Text style={{fontSize:16, fontWeight:'bold'}}>{room?.users}</Text>

       </View>
      <View
       style={styles.flatlist}>
      <FlatList
      inverted
      keyExtractor={(item, index) => index.toString()}
      data={messages}
      renderItem={({item })=>(
      <ChatCard chat={item} user={user}/>
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
      chatinfo:{
      width:"70%",  
     flexDirection:'row',
     justifyContent:'space-between',
     alignItems:'center'
      },
      flatlist: {
        flex:.9,
        height:"100%",
        width:'100%',
        marginBottom:20,
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




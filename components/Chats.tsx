
import { StyleSheet, Text, View ,FlatList} from 'react-native'
import React, { useContext } from 'react'
import ChatCard from './ChatCard';
import ChatInput from './ChatInput';
import { Ionicons as Icon } from '@expo/vector-icons';
import { removeLocalDataValue } from '../utils/storage';
import UserContext from './../utils/context';
import useChats from './../utils/useChats';
import Loading from './Loading';



interface Message{
    message: string;
    time: string;
    user: string;
  }
interface ChatsProps{


}

const Chats:React.FC<ChatsProps> = () => {

  const user = useContext(UserContext);
  // //console.log("Text.tsx  user ==== ",user.user)
  
  const {room,messages,sendMessage} = useChats(user.user)
  
  const room_loaded = room.users>0 && user.user.username !== ""
  
  if(!room_loaded){
    return <Loading/>
  }

  return (
    <View style={styles.container}>
     <View
       style={styles.chatinfo}>
       <Icon name={"ios-exit-outline"} color={'black'} size={30} onPress={()=>{
        removeLocalDataValue()
        user.updateUser({username:"",room:""})
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
      <ChatCard chat={item} user={user.user}/>
      )}
      />
      </View>
     <View style={styles.form}><ChatInput sendMessage={sendMessage} user={user.user}/></View>

    </View>
  )
}

export default Chats

const styles = StyleSheet.create({
    container: {
        flex:1,
        width: '100%',
        height:'100%',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',

    
      },
      chatinfo:{
      width:"70%",  
     flexDirection:'row',
     justifyContent:'space-evenly',
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




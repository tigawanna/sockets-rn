import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import JoinRoom from './components/JoinRoom';
import { useState } from 'react';
import { getLocalStorageData } from './utils/storage';
import { useEffect } from 'react';
import MainChatRoom from './components/MainChatRoom';


export default function App() {

const [userExists, setUserExists] = useState<boolean>(false);
const [user, setUser] = useState<any>({username:"",room:"general"});



useEffect(() => {
  if(user.username !== ""){
    (async () => {
      const localdata = await getLocalStorageData()
      if(localdata){
        setUser({username:localdata.username , room:localdata.room})
        setUserExists(true)
      }
    })
  }
 },[user])





  return (
   <View style={styles.container}>
    <View style={styles.status}>
    <StatusBar style="auto" />
    </View>

      <View style={styles.chats}>
      {userExists?<MainChatRoom
      user={user}
      userExists={userExists}
      setUserExists={setUserExists}
      />
      :<JoinRoom setUser={setUser} setUserExists={setUserExists}/>}
      </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height:'100%'

  },
  status: {
   alignItems: 'center',
    justifyContent: 'flex-end',
    height:'5%',
    width:'100%',

  },
  chats: {
   backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height:'95%',
    width:'100%',
  },

});





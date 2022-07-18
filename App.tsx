import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import useChat from './utils/useChat';
import Chats from './components/Chats';


export default function App() {
  // const {setRoom,user,setUser,room,messages,sendMessage,userExists,setUserExists} = useChat("genaral")
  // console.log("room ==== ",room)
  return (

    
    <View style={styles.container}>
      <View style={styles.status}>
        <StatusBar style="auto" />
        </View>

      <View style={styles.chats}>
      <Chats/>
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
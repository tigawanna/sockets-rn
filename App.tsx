import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import JoinRoom from './components/JoinRoom';
import { useState } from 'react';
import { getLocalStorageData } from './utils/storage';
import { useEffect } from 'react';
import UserContext from './utils/context';
import { User } from './utils/types';
import Chats from './components/Chats';
import Loading from './components/Loading';
import { useCountdownTimer } from 'use-countdown-timer';

// let the_user:any
// const getUser = async()=>{
//  the_user = await getLocalStorageData()
// }

export default function App() {
  const { countdown, start, reset, pause, isRunning } = useCountdownTimer({timer: 1000 * 3});
 const [user, setUser] = useState<User>({username:"",room:""});
 const updateUser = (new_user:User) => {setUser(new_user)};
 const [loading, setLoading] = useState(true);
 const [timeup, setTimeUp] = useState(true);



useEffect(()=>{
const timeout = setTimeout(() => {
setTimeUp (false);
}, 2000);

getLocalStorageData()
 .then((res)=>{
  const local_user = res as User
   updateUser(local_user)
   if(!countdown){
    setLoading(false)
   }
  })


 return () => { 
  clearTimeout(timeout);
}; 

 },[])


const user_exists = user && user?.username !==""

return (
   <View style={styles.container}>
    <View style={styles.status}>
    <StatusBar style="auto" />
    </View>

      <View style={styles.chats}>
      {loading && timeup ?<Loading />:
       <UserContext.Provider  value ={{user,updateUser}}>
       {user_exists?<Chats/>:<JoinRoom/>}  
       </UserContext.Provider>}
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





import { StyleSheet,View,Text} from 'react-native'
import React ,{useContext}from 'react'
import { useFormik } from 'formik';
import Button from './CustomButton';
import TextInput from './CustomInput';
import { storeLocalStorageData } from './../utils/storage';
import UserContext from './../utils/context';
import axios from 'axios';
import {LinearGradient} from 'expo-linear-gradient';

import * as yup from 'yup'
import { useState } from 'react';



interface JoinRoomProps{

}
const JoinRoom: React.FC<JoinRoomProps> = () => {


  const devUrl="http://localhost:4000"
  const lanUrl="http://192.168.43.238:4000"
  const prodUrl="https://sockets-server-ke.herokuapp.com/"
  
  
  const client = axios.create({ baseURL:prodUrl});
  const user = useContext(UserContext);

const [error, setError] = useState({ name:"", message:"" });
const { handleChange, handleSubmit, values,errors,isSubmitting } = useFormik({

    initialValues: { username:'',room:'general' },

     onSubmit: values =>{
      const roomname = values.room?values.room.toLowerCase():"general"
      const username = values.username.toLowerCase()
      const room_data = {username,room:roomname}

     client.post('/users', {user:room_data})
     .then( (response)=> {
     const user_exist =response.data.data
      console.log("user exists === ",user_exist,room_data)

     if(user_exist){
      console.log("error block")
      setError({name:"username",message:"username exists"})
      errors.username = "username exists"
      }else{
        console.log("no error block")
        storeLocalStorageData(room_data)
        user.updateUser(room_data)  
      }

    
 
     })
     .catch(function (error) {
 
      });
     
    }

  })
  console.log("errors",errors.username)

  const validationColor = "white"
  const textColor = "white"

return (
    <View 
    style={styles.container}>
     <LinearGradient colors={['#164e63', '#1b9999', '#851ea3']} style={styles.linearGradient}>   
    <View style={styles.formbox}>
  
   <TextInput onChangeText={handleChange('username')} value={values.username} 
   validationColor={validationColor} textcolor={textColor}/>
   {/* {errors.username &&<Text style={{ fontSize: 15, color: 'yellow' }}>{errors.username}</Text>} */}
   {error.name==="username" &&<Text style={{ fontSize: 15, color: 'yellow' }}>{error.message}</Text>}
   <View style={styles.inputbuffer}></View>

   <TextInput onChangeText={handleChange('room')} value={values.room} 
    validationColor={validationColor} textcolor={textColor}
   />
   {error.name === "room" &&<Text style={{ fontSize: 15, color: 'yellow' }}>{error.message}</Text>}

   <View style={styles.button}>
   <Button onPress={handleSubmit} label="JOIN" color={textColor} />
   </View>

   </View>
   </LinearGradient>
</View>
  )
}

export default JoinRoom

const styles = StyleSheet.create({
  container:{

    flex:1,
    width:'100%',
    height:"100%",
    marginTop:15
 

   },
 inputbuffer:{
 height:20,
 flexDirection:'column',
 justifyContent:'center',
 alignItems:'center',
 width:'100%'
},
linearGradient: {
  flex: 1,
  width:'100%',
  height:"100%",
  flexDirection:'column',
  justifyContent:'center',
  alignItems:'center',

},
formbox:{
  flex:.5,
  height:100,
  backgroundColor:"#330033",
  flexDirection:'column',
  justifyContent:'center',
  alignItems:'center',
  width:'95%',
  borderRadius:10,
  elevation:7,
  shadowColor:'#00ff33',
  shadowOffset: {
    width: 5,
    height: 25,
  },
  shadowOpacity:  .9,
  shadowRadius: 50.05,
 }
,
button:{
marginTop:20,


 }

})

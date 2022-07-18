import { StyleSheet,View,KeyboardAvoidingView,Platform,   } from 'react-native'
import React from 'react'
import { useFormik } from 'formik';
import Button from './CustomButton';
import TextInput from './CustomInput';
import { storeLocalStorageData } from './../utils/storage';

interface JoinRoomProps{
  setUser: React.Dispatch<any>
  setUserExists: React.Dispatch<React.SetStateAction<boolean>>
}
const JoinRoom: React.FC<JoinRoomProps> = ({setUser,setUserExists}) => {


const { handleChange, handleSubmit, values } = useFormik({
    initialValues: { username:'',room:'general' },
    onSubmit: values =>{
     storeLocalStorageData(values)
     setUser(values)
     setUserExists(true)
     
    }

  })
  return (
    <View 
    style={styles.container}>
    <View style={styles.inputbutton}>
   <TextInput onChangeText={handleChange('username')} value={values.username}/>
   <TextInput onChangeText={handleChange('room')} value={values.room}/>
   
   <View style={styles.button}>
   <Button onPress={handleSubmit} label="JOIN" />
   </View>

   </View>
</View>
  )
}

export default JoinRoom

const styles = StyleSheet.create({
  container:{
    flex:1,
    width:'100%',
    height:"100%",
    flexDirection:'column',
   },
 inputbutton:{
 flex:1,
 height:60,
 flexDirection:'column',
 justifyContent:'center',
 alignItems:'center',
 width:'100%'
}
,
button:{
marginTop:20
 }

})

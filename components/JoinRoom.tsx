import { StyleSheet,View,KeyboardAvoidingView,Platform,   } from 'react-native'
import React from 'react'
import { useFormik } from 'formik';
import Button from './CustomButton';
import TextInput from './CustomInput';
import { storeLocalStorageData } from './../utils/storage';

interface JoinRoomProps{

}
const JoinRoom: React.FC<JoinRoomProps> = () => {


const { handleChange, handleSubmit, values } = useFormik({
    initialValues: { username:'',room:'general' },
    onSubmit: values =>{
     storeLocalStorageData(values)
    }

  })
  return (
    <View 
    style={styles.container}>
    <View style={styles.inputbutton}>
   <TextInput onChangeText={handleChange('username')} value={values.username}/>
   <TextInput onChangeText={handleChange('room')} value={values.room}/>
   <Button onPress={handleSubmit} icon="md-send-outline" />
   </View>
</View>
  )
}

export default JoinRoom

const styles = StyleSheet.create({
  container:{
    width:'100%',
    height:50

   },
 inputbutton:{
 flex:1,
 flexDirection:'row',
 justifyContent:'center',
 alignItems:'center',
 width:'100%'


   }
})

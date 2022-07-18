import { StyleSheet,View,KeyboardAvoidingView,Platform,  } from 'react-native'
import React, { useState } from 'react';
import { Formik } from 'formik';
import Button from './CustomButton';
import TextInput from './CustomInput';

interface ChatInputProps{

}

const ChatInput:React.FC<ChatInputProps> = () => {
const [text, setText] = useState('');

  return (
    <View 
    style={styles.container}>
     <Formik
     initialValues={{ email: '' }}
     onSubmit={values => console.log(values)}
   >
     {({ handleChange, handleBlur, handleSubmit, values }) => (
       <View style={styles.inputbutton}>
         <TextInput
          onChangeText={handleChange('email')}
           onBlur={handleBlur('email')}
           value={values.email}
         />
         <Button onPress={handleSubmit} icon="md-send-outline" />
       </View>
     )}
   </Formik>
    </View>
  )
}

export default ChatInput

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

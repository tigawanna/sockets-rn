import { StyleSheet,View} from 'react-native'
import React, { useState } from 'react';

import Button from './CustomButton';
import TextInput from './CustomInput';
import { useFormik } from 'formik';

interface ChatInputProps{

}

const ChatInput:React.FC<ChatInputProps> = () => {
const [text, setText] = useState('');
const { handleChange, handleSubmit, values } = useFormik({
    initialValues: { message:'' },
    onSubmit: values =>
     { alert(`message: ${values.message}`)}
  })

  return (
        <View 
          style={styles.container}>
          <View style={styles.inputbutton}>
         <TextInput
          onChangeText={handleChange('message')}
          value={values.message}
         />
         <Button onPress={handleSubmit} icon="md-send-outline" />
       </View>
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

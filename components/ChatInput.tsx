import { StyleSheet,View} from 'react-native'
import React  from 'react';

import Button from './CustomButton';
import TextInput from './CustomInput';
import { useFormik } from 'formik';
import { makeTimeStamp } from './../utils/makeTime';

interface Message{
    message: string;
    time: string;
    user: string;
  }
interface ChatInputProps{
    sendMessage: (message: Message) => void
 
    user: { username: string; room: string;}
}

const ChatInput:React.FC<ChatInputProps> = ({sendMessage,user}) => {

const { handleChange, handleSubmit, values } = useFormik({
    initialValues: { message:'' },
    onSubmit: values =>
     { 
     const new_message={message: values.message, time:makeTimeStamp(),user:user.username}
    sendMessage(new_message)
    }
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
     height:50,
     marginBottom:20,

    },
  inputbutton:{
  flex:1,
  flexDirection:'row',
  justifyContent:'center',
  alignItems:'center',
  width:'100%'


    }
})

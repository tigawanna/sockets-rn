import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useCountdownTimer } from 'use-countdown-timer';

interface LoadingProps{

}
const Loading:React.FC<LoadingProps> = () => {


  return (
    <View style={styles.container}>
      <Text style={styles.loadingtext}>Loading....</Text>
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({
    container:{
        flex:1,
        height:"100%",
        width:"100%",
        position:'relative',
        zIndex:5,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#55'
    },
    loadingtext:{
    fontSize:20,
    
    }
})

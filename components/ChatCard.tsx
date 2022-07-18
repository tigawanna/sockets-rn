import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Manager } from "socket.io-client";


interface Chat { newMessage:{message: string; time: string,user:string }};
interface ChatCardProps {
  chat: Chat;
  user: { username: string; room: string;}
}


const ChatCard: React.FC<ChatCardProps> = ({ chat,user }) => {
const isMe= chat.newMessage.user === user.username
  return (
    <View style={styles.container}>

      <View style={[styles.initials,{backgroundColor:isMe?"black":"white"}]}>
          <Text 
          adjustsFontSizeToFit={true}
          numberOfLines={1}
          style={[styles.initialstext,{color:isMe?"white":"black"}]}>
            {chat?.newMessage.user[0]}</Text>
        </View>

      <View style={styles.body}>

      <View style={styles.bodymessage}>
      <Text style={styles.bodymessagetext}>{chat.newMessage.message}</Text>
      </View>

      <View style={styles.bodyusertime}>

      <View style={styles.user}>
      <Text style={styles.usertext}>{chat.newMessage.user}</Text>
      </View>
      <View style={styles.user}>
      <Text style={styles.usertext}>{chat.newMessage.time}</Text>
      </View>

      </View>

      </View>
    </View>
  );
};

export default ChatCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    width: "98%",
    height: "100%",
    minHeight:70,
    margin: 5,
     // borderColor:'#fb0',
    // borderStyle:'solid',
    // borderWidth:1,

  },
  initials: {
    flex: 1,
    // height: 50,
    // width:  50,
    borderColor:'#000',
    borderStyle:'solid',
    borderWidth:1,
    borderRadius: 30,
    padding:2,
    maxWidth:'15%',
    justifyContent:'center',
    alignItems:'center'
  },
  initialstext: {
   fontSize:30,
    marginTop:0,
    // borderColor:'#fb0',
    // borderStyle:'solid',
    // borderWidth:1,
    textTransform: 'uppercase'

   
  },
  body: {
    flex: 1,
    flexDirection:'row',
    borderRadius:5,
    padding:5,
    marginHorizontal:5,
    height:'100%',
    borderColor:'#006',
    borderStyle:'solid',
    borderWidth:1,

  },
  bodymessage: {
    flex: .8,
    flexDirection:'row',
    padding:5,
    marginRight:5,
    height:'100%',
},
bodymessagetext: {
    width: "100%",
    fontSize: 16,
  

  },
bodyusertime: {
 flex:.2,
    flexDirection:'column',
    justifyContent:'flex-end',
    alignItems:'flex-end',
    height:'100%',
},
user: {
width: "100%",
},
usertext: {
width: "100%",
fontSize: 12,
},
  listitem: {
    width: "100%",
    fontSize: 18,
    padding: 5,
  },
});

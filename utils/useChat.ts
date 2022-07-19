import { useEffect, useRef, useState } from "react";
import socketIOClient ,{Socket} from "socket.io-client";

const NEW_MESSAGE_ADDAED = "new_message_added";
const ROOM_DATA = "room_data";

const devUrl="http://localhost:4000"
const lanUrl="http://192.168.43.238:4000"
const prodUrl="https://sockets-server-ke.herokuapp.com/"


interface User{
  username:string ; room:string
}
const useChat = (user:User) => {


 const [messages, setMessages] = useState<any>([]);
  const [room, setRoom] = useState<any>([]);
  const socketRef = useRef<Socket>();

  useEffect(() => {
  // console.log("aUser vs User === ",aUser,user)
    socketRef.current = socketIOClient(prodUrl, {
      query: { room:user.room,user:user.username },
       transports: ["websocket"],
       withCredentials: true,
       extraHeaders:{"my-custom-header": "abcd"}
   })

  socketRef.current?.on(NEW_MESSAGE_ADDAED, (msg:any) => {
    console.log("new message  added==== ",msg)
    setMessages((prev: any) => [msg,...prev]);
  });

  socketRef.current?.on("connect", () => {
    console.log("joined the server")

  });

  socketRef.current?.on(ROOM_DATA, (msg:any) => {
    console.log("on room listener ==== ",msg)
   setRoom(msg)
  });

return () => {socketRef.current?.disconnect();};
  }, [user]);


const sendMessage = (message:any) => {
  //  console.log("sending message ..... === ",message)
    socketRef.current?.emit("new_message", message)
  };

//   socketRef.current?.emit('join',
//   {name:aUser.username,room:aUser.room}, (error:any) => {
//     if(error) {alert(error);}})


  return {setRoom,room,messages, sendMessage};
};

export default useChat;

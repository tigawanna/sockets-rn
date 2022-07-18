import { useEffect, useRef, useState } from "react";
import socketIOClient ,{Socket} from "socket.io-client";
import { getLocalStorageData } from "./storage";


const NEW_MESSAGE_ADDAED = "new_message_added";
const ROOM_DATA = "room_data";

const devUrl="http://localhost:4000"
const lanUrl="http://192.168.43.238:4000"
const prodUrl="https://sockets-server-ke.herokuapp.com/"



const useChat = (roomId:string) => {


 const [messages, setMessages] = useState<any>([]);
  const [room, setRoom] = useState<any>([]);
  let aUser={username:"",room:"general"}

  const [user, setUser] = useState<any>({username:"",room:"general"});
  const [userExists, setUserExists] = useState<boolean>(true);
  const socketRef = useRef<Socket>();

  useEffect(() => {

if(userExists)
{ (async () => {
  const localdata = await getLocalStorageData()
  console.log("localstorage data ==== ", localdata)
  if(localdata){
    aUser = localdata
    setUser(aUser)
    setUserExists(true)

   }else{
    setUser(undefined)
    setUserExists(false)
   }
    }
  )() }

  // console.log("aUser vs User === ",aUser,user)
  socketRef.current = socketIOClient(prodUrl, {
    query: { room:user.room,user:user.username },
      transports: ["websocket"],
      withCredentials: true,
      extraHeaders:{"my-custom-header": "abcd"}
  })

 socketRef.current?.on(NEW_MESSAGE_ADDAED, (msg:any) => {
    // console.log("new message  added==== ",msg)
    setMessages((prev: any) => [msg,...prev]);
  });

  socketRef.current?.on("connect", () => {
    // console.log("oined the server")

  });

  socketRef.current?.on(ROOM_DATA, (msg:any) => {
    // console.log("room data  ==== ",msg)
   setRoom(msg)
  });

return () => {socketRef.current?.disconnect();};
  }, [roomId,userExists]);


 

 const sendMessage = (message:any) => {
  //  console.log("sending message ..... === ",message)
    socketRef.current?.emit("new_message", message)
  };

//   socketRef.current?.emit('join',
//   {name:aUser.username,room:aUser.room}, (error:any) => {
//     if(error) {alert(error);}})


  return {setRoom,user,setUser,room,messages, sendMessage,userExists,setUserExists };
};

export default useChat;

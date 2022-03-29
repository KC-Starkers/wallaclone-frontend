import React, { useState, useEffect, useRef } from "react";
import '../../index.css'
import socket from "./Socket";
import { useSelector } from "react-redux";
import { getUser } from "../../store/selectors";
import { getChat, createMSG, getMSG, getPart} from "./apicalls";
import { useParams } from "react-router-dom";
import { getUserName } from "../../apicalls";

const Chat = () => {

  let { id } = useParams();
  
  const user = useSelector(getUser);

  const [message, setmessage] = useState();
  const [messages, setmessages] = useState('');
  const [chatId, setchatId] = useState(id)
  const [participants, setParticipants] = useState([])
  const [auth, setAuth] = useState(false)
  const [username, getusername] = React.useState([])

  let checkparticipants = async() => {
    return await getPart(id).then(setParticipants)
  }

  let checkAuth = () => {
    if(username == null){
      setAuth(false)}else{
    for (var i = 0; i < participants.length; i++) {
      if(participants[i] == username){
        debugger
        setAuth(true)
        break}
      }
    }
  }

  useEffect(() => {
    socket.emit("conectado", [username, id]);
  }, [user]);

  useEffect(() => {
    socket.on("messages", (message) => {
      setmessages([...messages, message]);
    });

    return () => {
      socket.off();
    };
  }, [messages]);

  
let downloadMSG = async() => {
      try {
        let m = await getMSG(chatId).then(setmessages);
        return m
      } catch (error) {
        return error
    };
  }


useEffect(() => {
  downloadMSG()
  checkparticipants()
  console.log(user)
  debugger
  getUserName(user)
    .then((res) =>getusername(res[0]['userName']))
    .catch((err) => console.log(err));
}, [])

useEffect(() => { 
  checkAuth()
  console.log('check')
})


  const submit = (e) => {
    createMSG(username, message, chatId)
    e.preventDefault();
    socket.emit("message", username, message, id);
    setmessage("");
  };

  return (
    <div>
      <p>participantes: {participants}</p>
        {auth ?
        <> 
      <div className="chat">
        {messages.length <= 0 ? <p>no hay mensajes</p> : 
        messages.map((e, i) => (
          <div key={i}>
            <p><strong>{e.user}</strong> : {e.message}</p>
            
          {console.log(e)}
          </div>
        ))
        }
      </div>
      <form onSubmit={submit}>
        <label htmlFor="">Escriba su message</label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          value={message}
          onChange={(e) => setmessage(e.target.value)}
        ></textarea>
        <button>Enviar</button>
      </form>
      </>
    : <p>No tienes autorización para ver el chat</p>}
    </div>
  );
};

export default Chat;

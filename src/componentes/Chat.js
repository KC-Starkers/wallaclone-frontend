import React, { useState, useEffect, useRef } from "react";
import socket from "./Socket";
import "../App.css";
import { getChat, createMSG, getMSG } from "./apicalls";
import { useParams } from "react-router-dom";

const Chat = ({ user }) => {
  let { id } = useParams();
  const [message, setmessage] = useState();
  const [messages, setmessages] = useState(['']);
  const [chatId, setchatId] = useState(id)

  useEffect(() => {
    socket.emit("conectado", [user, id]);
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
        debugger
        let m = await getMSG(chatId).then(setmessages);
        console.log(messages)
        return m
      } catch (error) {
        return error
    };
  }




useEffect(() => {
  downloadMSG()
  console.log(messages)
  debugger

}, [])


  const divRef = useRef(null);
  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  });

  const submit = (e) => {
    createMSG(user, message, chatId)
    e.preventDefault();
    socket.emit("message", user, message, id);
    setmessage("");
  };

  return (
    <div>
      <div className="chat">
        {
        messages.map((e, i) => (
          <div key={i}>
            <p><strong>{e.user}</strong> : {e.message}</p>
            {console.log(messages.length, messages)}
          </div>
        ))
        }
        <div ref={divRef}></div>
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
    </div>
  );
};

export default Chat;

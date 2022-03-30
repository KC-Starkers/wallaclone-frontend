import React, { useEffect, useState } from "react";
import {useNavigate } from "react-router-dom";
import '../../index.css'
import { setMail, getChat, createChat, getMail, getPart } from "../chat/apicalls";

function StartChat({chatId}) {
    let navigate = useNavigate();
    
    const [chats, setchats] = useState([""]);
    const [registrado, setRegistrado] = useState(false);
    

    useEffect(() => {
        getChat().then(setchats)
    }, [])

    const registrar = (e) => {
        e.preventDefault();
        let orderusers = [chatId[0], chatId[1]].sort()
        // myuser, advert.createdBy, advert._id
        let thisChatId = orderusers[0]+'.'+orderusers[1]+'.'+chatId[2]+'.'+chatId[3]
        let all = btoa(thisChatId)
        let findChats = chats.find(element => element.chatId === all)
        findChats ? setRegistrado(true) : createChat(thisChatId).then(setRegistrado(true))
        return navigate(`/chat/${all}`)
      };

    return(<button onClick={registrar}>PROBAR EL CHAT</button>)
}

export default StartChat
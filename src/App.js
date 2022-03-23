import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Chat from "./componentes/Chat";
import "./App.css";
import { checkChat, getChat, createChat } from "./componentes/apicalls";

function Root() {
  let navigate = useNavigate();
  const [user, setUser] = useState("");
  const [producto, setProducto] = useState("");
  const [chats, setchats] = useState([""]);
  const [chatId, setchatId] = useState([""]);
  const [seller, setSeller] = useState("");
  const [registrado, setRegistrado] = useState(false);

useEffect(() => {
  getChat().then(setchats)
}, [])

console.log(chats)


  const registrar = (e) => {
    e.preventDefault();
    let thisChatId = producto+'.'+user+'.'+seller
    let all = btoa(thisChatId)
    setchatId(all)
    let findChats = chats.find(element => element.chatId === all)
    findChats ? setRegistrado(true) : createChat(thisChatId).then(setRegistrado(true))
    return navigate(`/chat/${all}`)
  };

  //let CreateNewChat = () => {createChat(thisChatId).then(setRegistrado(true))}

  return (
    
    <Routes>
      <Route exact path="/" element={<p>nada</p>} />
      <Route exact path="/chat" element={
        <div className="App">
          {registrado ? console.log('hola') : (
            <form onSubmit={registrar}>
              <label htmlFor="">Introduzca nombre de comprador</label>
              <input value={user} onChange={(e) => setUser(e.target.value)} />
              <br></br>
              <label htmlFor="">Introduzca nombre de vendedor</label>
              <input value={seller} onChange={(e) => setSeller(e.target.value)} />
              <br></br>
              <label htmlFor="">producto</label>
              <input value={producto} onChange={(e) => setProducto(e.target.value)} />
              <br></br>
              <button>Ir al chat</button>
            </form>
          )}
        </div>} />
        <Route exact path={`/chat/:id`} element={ <Chat user={user}/>} />
    </Routes>
  );
}


function App() {
  return (
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  );
}


export default App;

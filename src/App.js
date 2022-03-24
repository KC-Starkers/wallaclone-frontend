import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Chat from "./componentes/Chat";
import "./App.css";
import { setMail, getChat, createChat, getMail, getPart } from "./componentes/apicalls";

function Root() {
  let navigate = useNavigate();
  const [user, setUser] = useState('');
  const [producto, setProducto] = useState('lavadora');
  const [chats, setchats] = useState([""]);
  const [chatId, setchatId] = useState([""]);
  const [seller, setSeller] = useState('Paco');
  const [registrado, setRegistrado] = useState(false);
  const [part, setpart] = useState('');

useEffect(() => {
  getChat().then(setchats)
}, [])
/*
getMail().then(setUser)
console.log(user)
*/

console.log(chats)

let gtok = (e) => {
  e.preventDefault();
  setMail('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjNiNjg1YmQ3Zjc5NTU3YzgwODlhZDkiLCJlbWFpbCI6ImJtZ0Bob3RtYWlsLmNvbSIsImlhdCI6MTY0ODA2MDU5NiwiZXhwIjoxNjQ4MjMzMzk2fQ.j8ACqPHasq5nJQJmFxO_d19240Ze-X9GhynmAtak-0g')
}

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
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjNiNjg1YmQ3Zjc5NTU3YzgwODlhZDkiLCJlbWFpbCI6ImJtZ0Bob3RtYWlsLmNvbSIsImlhdCI6MTY0ODA2MDU5NiwiZXhwIjoxNjQ4MjMzMzk2fQ.j8ACqPHasq5nJQJmFxO_d19240Ze-X9GhynmAtak-0g
  return (
    
    <Routes>
      <Route exact path="/" element={
        <button onClick={gtok}></button>
      } />
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

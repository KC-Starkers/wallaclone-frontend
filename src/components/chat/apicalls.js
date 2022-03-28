import client from "../../client/client";

const path = "/chat";

export const getChat = () => {
  let gt = client.get(`${path}`)
  return gt
};
export const createMSG = (user, message, chatId) => {
  let newmsg = client.post('/chat', {'user': user, 'message': message, 'chatId': chatId})
  return newmsg
};

export const createChat = info => {
  let decode = info.split('.')
  console.log(info)
  debugger
  let all = btoa(info)
  let newmsg = client.post('/chat/create', {'chatId': all, 'chatSeller': decode[1], 'chatBuyer': decode[0]})
  return newmsg
};

export const getMSG = chatId =>{
  let gt = client.get(`${path}/${chatId}`)
  return gt
}


export const checkChat = info => {
  
  let decode = atob(info)
  let sep = decode.split('.')
  console.log(sep)
  
}

export const setMail = info => {
  let gt = client.get(`/auth/chat/${info}`)
  return gt
}

export const getMail = info => {
  let gt = client.get(`/auth/email`)
  return gt
}

export const getPart = (id) => {
  let url = `/chat/info/${id}`
  let i = client.get(url)
  console.log(i)
  debugger
  return i
}
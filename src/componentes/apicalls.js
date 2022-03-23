import client from "../client/client";

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
  //let decode = atob(info)
  //let decoded_info = decode.split('.')
  let decode = info.split('.')
  let all = btoa(info)
  console.log(decode[1])
  console.log(decode[2])
  debugger
  let newmsg = client.post('/chat/create', {'chatId': all, 'chatSeller': decode[2], 'chatBuyer': decode[1]})
  debugger
  return newmsg
};

export const getMSG = chatId =>{
  debugger
  let gt = client.get(`${path}/${chatId}`)
  return gt
}


export const checkChat = info => {
  
  let decode = atob(info)
  let sep = decode.split('.')
  console.log(sep)
  debugger
  
}

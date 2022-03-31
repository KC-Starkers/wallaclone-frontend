import { useEffect, useState } from "react";
import { getMychats } from "./apicalls"
import { getUser } from "../../store/selectors";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUserName } from "../../apicalls";


const MyChats = () => {
        
    const user = useSelector(getUser);
    const [mychats, getchats] = useState([])
    const [username, getusername] = useState('');
    
    useEffect(() => {
        //}, [])
        getUserName(user)
            .then((res) => {
            getusername(res[0]["userName"]);
            })
            .catch((err) => console.log(err));
        
    }, []);

    
    let i = ''

    useEffect(() => {
        getMychats(username).then((res) => {
            console.log(res)
            getchats(res)
            /*
            if(res.length > 1){
                for(let d = 0; d < res.length; d++)
                let i = res[].concat(res[1])
                getchats(i)
            }else{
                getchats(res)*/
            });
    }, [username])

    useEffect(() => {}, [mychats])

    return (
        <div>
            <p>Aquí tienes tus chats, {username}</p>
            <ul className="wrapper"> 
                {mychats.length <= 0 ? <p>no hay chats todavia</p> :
                    mychats.map((chat) => (
                        <Link key={chat._id} to={`/chat/${chat.chatId}`}>
                            <li key={chat.product}>
                                <p>{chat.product}</p>
                            </li>
                        </Link>
                    ))
                }
            </ul>
        </div>
    )
}

export default MyChats

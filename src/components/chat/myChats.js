import { useEffect, useState } from "react";
import { getMychats } from "./apicalls"
import { getUser } from "../../store/selectors";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const MyChats = () => {
        
    const user = useSelector(getUser);
    const [mychats, getchats] = useState([])

    useEffect(() => {
        getMychats(user).then(getchats);
    }, [])

    return (
        <div>
            <ul className="wrapper"> 
                {mychats.length <= 0 ? <p>no hay chats todavia</p> :
                    mychats.map((chat) => (
                        <Link to={`/chat/${chat.chatId}`}>
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
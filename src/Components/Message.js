import { useContext, useEffect, useRef } from 'react';
// import Photo from '../assets/pain_smith.jpg';
import { AuthContext } from '../Context/AuthContext';
import { ChatContext } from '../Context/ChatContext';

const Message = ({message}) => {

    const { currentUser } = useContext(AuthContext);
    const { data } = useContext(ChatContext);

    const ref = useRef();

    useEffect(() => {
        ref.current?.scrollIntoView( {behaviour: "smooth" });
    }, [message]);
    
    const showName = () => {
        if (message.senderId === currentUser.uid){
            return currentUser.displayName;
        } else {
            return data.user.displayName;
        }
    }
    
    return (
        <>
            <div
                ref={ref} 
                className={`message ${message.senderId === currentUser.uid && "user"}`}
            >
                <div className="message_info">
                    <img 
                        src={
                            message.senderId === currentUser.uid
                            ? currentUser.photoURL
                            : data.user.photoURL
                        } 
                        alt="" 
                    />
                    <span>{showName()}</span>
                </div>
                <div className="message_content">
                    <p>{message.text}</p>
                </div>
            </div>
        </>
    )
}

export default Message;
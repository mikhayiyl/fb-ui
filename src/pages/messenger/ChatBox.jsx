import { useEffect, useRef } from 'react';
import Message from './message/Message';


const ChatBox = ({ messages, newMessage, setNewMessage, onSubmit, currentChat, typing, user }) => {



    const scrollRef = useRef();
    //scroll effect
    useEffect(() => {
        scrollRef.current?.scrollIntoView({ inline: "nearest", behaviour: "smooth" })

    }, [messages])


    console.count("CHATBOX");

    return (
        <div className="chatBox">
            <div className="chatBoxWrapper">
                {currentChat ?

                    <>
                        <div className='chatBoxTop'>
                            <p className='typing'>{typing.typingStatus}</p>
                            {messages.map(message =>
                                <div key={message?._id} ref={scrollRef}>
                                    <Message message={message} own={message?.sender === user._id} currentChat={currentChat} user={user} />
                                </div>
                            )}
                        </div>
                        <div className="chatBoxBottom">
                            <textarea
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
                                placeholder="start conversation..." className='chatMessageInput form-control'></textarea>
                            <button className="btn btn-sm btn-success" onClick={onSubmit}>Send</button>
                        </div>
                    </> : <span className='noConversation'>Start a Conversation</span>
                }
            </div>
        </div>

    )
}

export default ChatBox
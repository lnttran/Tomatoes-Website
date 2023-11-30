"use client";
import axios from "axios";
import { useEffect, useState } from "react"
import './styles.css';
import chatIcon from 'public/images/recipe-book.png';
import Image from 'next/image'

export default function ChatBot() {
    //the user input 
    //constant variable cannot be reassigned or redeclared after it has been initialized 
    const [isChatOpen, setIschatOpen] = useState(false);

    return (
        <div>
            {!isChatOpen && (<button className="floating-button" onClick={() => setIschatOpen(true)}>
                <Image src={chatIcon} alt="Chat" width={40} height={40} />
            </button>)}
            {isChatOpen && (

                <div className="chat-portal">
                    <button className="close-button" onClick={() => setIschatOpen(false)}>
                        X
                    </button>
                    <ChatBox />
                </div>
            )}
        </div>
    )

}

function ChatBox() {
    const [inputValue, setInputValue] = useState('');
    const [chatlog, setChatlog] = useState<{ type: string; message: string }[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (event: any) => {
        event.preventDefault();
        setChatlog(prevChatLog => [...prevChatLog, { type: 'user', message: inputValue }])
        sendMessage(inputValue);
        setInputValue('');
    }

    useEffect(() => {
        // console.log(`ENV KEY: ${process.env.NEXT_PUBLIC_API_KEY}`)
    }, [])

    const sendMessage = (message: any) => {
        const url = `${process.env.NEXT_PUBLIC_URL as string}/api/chatbot`;
        setIsLoading(true);

        //data is a json 
        const data = {
            message: message
        }
        // send di
        //send the POST request to the openAi api with the specified URL, data payload, and headers
        //send json data to rest api 
        axios.post(url, data).then(async (response) => {
            console.log("Received response");
            console.log(response);

            //chat log state is updated with the bot's response. the loading state is set to false to indicate that the request is complete. 
            setChatlog((prevChatLog) => [...prevChatLog, { type: 'bot', message: response.data.content }])
            setIsLoading(false);
        }).catch((error) => {
            setIsLoading(false);
            console.log(error);
        })
    }
    return (
        <div className="flex w-full flex-col h-[100%] justify-between">
            <h1 className="text-black font-serif text-2xl">Recipe Recommender Bot</h1>
            {
                //this iterating to the array of chatlog and get the message
                //message is the element of index number in the arrage chatLog
                //the key attribute is set to index to help react efficient update and re-render the compinets when the array changes
                <div className="chat-container">
                    {chatlog.map((message, index) => (
                        <div key={index} className={message.type === 'user' ? 'user-message' : 'bot-message'}>
                            {message.message}
                        </div>
                    ))}

                </div>

            }

            <form onSubmit={handleSubmit} className="flex flex-row justify-between">
                {/* e.target.value extracts the current value of the input elelmtn. Represents the new value entered by the user */}
                <input type="text" placeholder="What are you in the mood for today?" value={inputValue} onChange={(e) => setInputValue(e.target.value)} className="text-input"></input>
                {/* <button type="submit">Send</button> */}
                <button type="submit" className="send-button">Send</button>
            </form >

        </div>
    )
}
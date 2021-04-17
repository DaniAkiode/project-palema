import React , { useContext, useEffect, useRef } from 'react';
import { QuizContext } from "../helpers/Context";
import { Responses } from "../helpers/RespoBank";
import {TextField} from '@material-ui/core';
import "../App.css";

function useKey(key, cb) {
    const callbackRef = useRef(cb);

    useEffect(() => {
        callbackRef.current = cb;
    });

    useEffect(() => {
        function handle(event){
            if (event.code === key){
                callbackRef.current(event)
            }
        }

        document.addEventListener("keypress", handle)
        return () => document.removeEventListener("keypress", handle)
    }, [key]) ;
}


function Chatbot(){
    function handleEnter(){
        console.log("Enter key is pressed")
        //onChange={userText}
    }
    //useKey("Enter", handleEnter)


    const userText=(u)=>{
        if (u == Responses.user) {
            <h2>{Responses.anita}</h2>
        }
    }

    const { gameState, setGameState } = useContext(QuizContext);

    return (
        <div className="ChatBot">
            E ka bo, Orukọ mi ni Anita 
            <div className="ChatBox">
                <div className="chat">
                    <h2>Enter your responses in Yoruba Only</h2>
                    <p className="chatLog"> lets chat</p>
                </div>
                <div className="input">
                    <TextField
                        onKeyDown={useKey("Enter", handleEnter)}
                        onChange={userText}
                    />

                </div>

            </div>
            <button className ="RedButton" onClick={() => {
                setGameState("menu");
            }}>Back to menu</button>
        </div>
        );
}

export default Chatbot;
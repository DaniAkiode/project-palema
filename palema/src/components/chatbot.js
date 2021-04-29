import React , { useState, useContext, useEffect, useRef } from 'react';
import { QuizContext } from "../helpers/Context";
import RESPONSEDATA from "../helpers/RESPONSEDATA.json";
//import {TextField} from '@material-ui/core';
import "../App.css";


function useKey(key, cb) {

    const callbackRef = useRef(cb);
    
    useEffect(() => {
        callbackRef.current = cb;
    });

    useEffect(() => {
        function handle(event) {
            if (event.code === key) {
                callbackRef.current(event);
            }
        }

        document.addEventListener("keydown", handle);
        return () => document.removeEventListener("keydown", handle);
    },[key]);
}

function Chatbot(){

    function handleEnter() {
        console.log("BackSpace")
        setClicked(false);
    }
    useKey("Backspace", handleEnter)

    const { gameState, setGameState } = useContext(QuizContext);
    const [userInput, setUserInput ] = useState("");
    const [clicked, setClicked] = useState(false);

    const onSubmit = (event) => {
        event.preventDefault();
        setClicked(true);
    }

    return (
        <div className="ChatBot">
            <h2>E ka bo, Orukọ mi ni Anita</h2> 
            <p>Make sure you respond in yoruba only, start of by saying 'E ka ro' or 'E ka san'</p>
            <div className="ChatSpace">
                {RESPONSEDATA.filter((val) => {
                    if(userInput =="") {
                        return null
                    } else if (val.user.toLowerCase().includes(userInput.toLowerCase())){
                        return val
                    }
                }).map((val, key) => {
                    return(
                    <div className="chatspace" key={key}>
                        {clicked ? <h3>{val.chatbot}</h3>: null}
                    </div>
                    );
                })}
                <form className="ChatbotForm" onSubmit={onSubmit}>
                    <input type = "text"
                    placeholder="Type in response..."
                    onChange={event => 
                    {setUserInput(event.target.value)
                    }}
                    //onKeyPress={handleKeyPress}
                    />
                    <button className="SendButton">
                        Send
                    </button>
                </form>
            </div>
            <button className ="RedButton" onClick={() => {
                setGameState("menu");
            }}>Back to menu</button>
        </div>
        );
}

export default Chatbot;
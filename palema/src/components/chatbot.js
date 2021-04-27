import React , { useState, useContext, useEffect, useRef } from 'react';
import { QuizContext } from "../helpers/Context";
import RESPONSEDATA from "../helpers/RESPONSEDATA.json";
//import {TextField} from '@material-ui/core';
import "../App.css";



function Chatbot(){

    const { gameState, setGameState } = useContext(QuizContext);
    const [userInput, setUserInput ] = useState("");
    const [clicked, setClicked] = useState(false);

    const onSubmit = (event) => {
        event.preventDefault();
        setClicked(true);
    }

    return (
        <div className="ChatBot">
            E ka bo, Orukọ mi ni Anita 
            <div className="ChatSpace">
                <form className="ChatbotForm" onSubmit={onSubmit}>
                    <input type = "text"
                    placeholder="Type in response..."
                    onChange={event => 
                    {setUserInput(event.target.value)
                    }}
                    />
                    <button>
                        Send
                    </button>
                </form>
                {RESPONSEDATA.filter((val) => {
                    if(userInput =="") {
                        return null
                    } else if (val.user.toLowerCase().includes(userInput.toLowerCase())){
                        return val
                    }
                }).map((val, key) => {
                    return(
                    <div className="chatspace" key={key}>
                        {clicked ? <p>{val.chatbot}</p>: null}
                    </div>
                    );
                })}
            </div>
            <button className ="RedButton" onClick={() => {
                setGameState("menu");
            }}>Back to menu</button>
        </div>
        );
}

export default Chatbot;
import React , { useState, useContext, useEffect, useRef } from 'react';
import { QuizContext } from "../helpers/Context";
import { Responses } from "../helpers/RespoBank";
import {TextField} from '@material-ui/core';
import "../App.css";



function Chatbot(){

    const { gameState, setGameState } = useContext(QuizContext);

    const [CurrentResponse , setCurrentResponse ] =  useState("");
    const [UserValue, setUserValue] = useState({
        UserRespo: ""
    });

    const DisplayResponse = (UserRespo) => {
        if (UserRespo == Responses[CurrentResponse].anita){
            <h2>{Responses[CurrentResponse].anita}</h2>
        }
    }

    const handleUserInputChange = (event) => {
        setUserValue({...UserValue, UserRespo: event.target.value})
    } 


    return (
        <div className="ChatBot">
            E ka bo, Orukọ mi ni Anita 
            <div className="ChatBox">
                <div className="BoxHeader">
                    <h2>Enter your responses in Yoruba Only</h2>
                </div>
                <div className="BoxMid">
                    <h2 className="chatLog"> lets chat</h2>
                </div>
                <div className="input">
                    
                        <input
                        onChange={handleUserInputChange}
                        value={UserValue.UserRespo}
                        type="text" 
                        className="form-field"
                        placeholder="enter your response"
                        name="UserRespo"
                        />
                        <button onClick={DisplayResponse}>
                            Send
                        </button>
                        

                </div>

            </div>
            <button className ="RedButton" onClick={() => {
                setGameState("menu");
            }}>Back to menu</button>
        </div>
        );
}

export default Chatbot;
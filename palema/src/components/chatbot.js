import React , { useState, useContext, useEffect, useRef } from 'react';
import { QuizContext } from "../helpers/Context";
import { Responses } from "../helpers/RespoBank";
//import {TextField} from '@material-ui/core';
import "../App.css";



function Chatbot(){

    const { gameState, setGameState } = useContext(QuizContext);

    return (
        <div className="ChatBot">
            E ka bo, Orukọ mi ni Anita 
    
            <button className ="RedButton" onClick={() => {
                setGameState("menu");
            }}>Back to menu</button>
        </div>
        );
}

export default Chatbot;
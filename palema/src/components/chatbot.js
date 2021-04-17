import React , { useContext } from 'react';
import { QuizContext } from "../helpers/Context";
import { Responses } from "../helpers/RespoBank";
import "../App.css";

function Chatbot(){
    const { gameState, setGameState } = useContext(QuizContext);

    return (
        <div className="ChatBot">
            E ka bo, Orukọ mi ni Anita 
            <div className="ChatBox">
                <div className="chat">
                    <h2>Enter your responses in Yoruba Only</h2>
                    <p id="chatLog"> lets chat</p>
                </div>
                <div className="input">
                    <input id="userbox" type="text"/>
                </div>
            </div>
            <button className ="RedButton" onClick={() => {
                setGameState("menu");
            }}>Back to menu</button>
        </div>
        );
}

export default Chatbot;
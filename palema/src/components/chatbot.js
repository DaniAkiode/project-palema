import React , { useContext } from 'react';
import { QuizContext } from "../helpers/Context";
import "../App.css";

function Chatbot(){
    const { gameState, setGameState } = useContext(QuizContext);

    return (
        <div className="ChatBot">
            Hi im anitta 
            <button className ="quitButton" onClick={() => {
                setGameState("menu");
            }}>QUIT</button>
        </div>
        );
}

export default Chatbot;
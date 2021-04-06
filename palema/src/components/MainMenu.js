import React , { useContext } from 'react';
import { QuizContext } from "../helpers/Context";
import "../App.css";

function MainMenu(){
    const { gameState, setGameState } = useContext(QuizContext);

    return (
        <div className="Menu">
            <button className="GreenButton" onClick={() => {
                setGameState("quiz");
            }}>
                Lesson 1
            </button>
            <button className="YellowButton" onClick={() => {
                setGameState("chatbot");
            }}>
                Speak to Chatbot
            </button>
            <button className="RedButton" onClick={() => {
                setGameState("homepage");
            }}>
                Log Out
            </button>
            
        </div>
        );
}

export default MainMenu;
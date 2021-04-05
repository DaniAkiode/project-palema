import React , { useContext } from 'react';
import { QuizContext } from "../helpers/Context";
import "../App.css";

function MainMenu(){
    const { gameState, setGameState } = useContext(QuizContext);

    return (
        <div className="Menu">
            <button onClick={() => {
                setGameState("quiz");
            }}>
                Lesson 1
            </button>
            <button onClick={() => {
                setGameState("chatbot");
            }}>
                Speak to Chatbot
            </button>
            <button onClick={() => {
                setGameState("homepage");
            }}>
                Log Out
            </button>
            
        </div>
        );
}

export default MainMenu;
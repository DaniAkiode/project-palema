import React , { useContext } from 'react';
import { QuizContext } from "../helpers/Context";
import "../App.css";

function Quiz(){
    const { gameState, setGameState } = useContext(QuizContext);

    return (
        <div className="Quiz">
            QUEEEZ 
            <button className ="quitButton" onClick={() => {
                setGameState("menu");
            }}>QUIT</button>
        </div>
        );
}

export default Quiz;
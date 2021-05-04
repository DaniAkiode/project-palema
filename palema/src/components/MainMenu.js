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
            <button className="GreenButton" onClick={() => {
                setGameState("quiz2");
            }}>
                Lesson 2
            </button>
            <button className="YellowButton" onClick={() => {
                setGameState("chatbot");
            }}>
                Speak to Chatbot
            </button>
            <button className="BlackButton" onClick={() => {
                setGameState("vocabsheet");
            }}>
                View Vocabulary Sheet 
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

////PedroTech, 2021. Coding a Quiz App in ReactJS - React Resume Projects. [video] Available at: <https://www.youtube.com/watch?v=8LNb18ibNGs&list=PLUAP7Jc-AKBEkqSCjRkkzwC6D_19K24tm&index=8&t=4s&ab_channel=PedroTech> [Accessed 3 May 2021].
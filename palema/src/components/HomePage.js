import React , { useContext } from 'react';
import { QuizContext } from "../helpers/Context";
import "../App.css";

function HomePage(){
    const { gameState, setGameState } = useContext(QuizContext);

    return (
        <div className="HomePage">
            <button className="GreenButton" onClick={() => {
                setGameState("menu");
            }}> Go to Menu

            </button>
        </div>
        );
}

export default HomePage;

////PedroTech, 2021. Coding a Quiz App in ReactJS - React Resume Projects. [video] Available at: <https://www.youtube.com/watch?v=8LNb18ibNGs&list=PLUAP7Jc-AKBEkqSCjRkkzwC6D_19K24tm&index=8&t=4s&ab_channel=PedroTech> [Accessed 3 May 2021].
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
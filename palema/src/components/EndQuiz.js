import React , { useContext } from 'react';
import { QuizContext } from "../helpers/Context";
import {Questions} from '../helpers/QuestionBank'
import "../App.css";

function EndQuiz(){
    const { points, setPoints, setGameState } = useContext(QuizContext);

    const restartQuiz = () => {
        setPoints(0);
        setGameState("menu");
    };

    const EnterChatbot = () => {
        setPoints(0);
        setGameState("chatbot");
    };

    const EnterLesson2 = () => {
        setPoints(0);
        setGameState("quiz2");
    };

    return (
        <div className ="EndQuiz">
            <h1>Quiz Ended</h1>
            <h3>{points} / {Questions.length}</h3>
            <button className ="RedButton" onClick={restartQuiz}>Back to menu </button>
            <button className="YellowButton" onClick={EnterChatbot}>
                Speak to Chatbot
            </button>
            
            <button className="GreenButton" onClick={EnterLesson2}>
                Proceed to Lesson 3
            </button>
        </div>
        );
}


export default EndQuiz;


////PedroTech, 2021. Coding a Quiz App in ReactJS - React Resume Projects. [video] Available at: <https://www.youtube.com/watch?v=8LNb18ibNGs&list=PLUAP7Jc-AKBEkqSCjRkkzwC6D_19K24tm&index=8&t=4s&ab_channel=PedroTech> [Accessed 3 May 2021].
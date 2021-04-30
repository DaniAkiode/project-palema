import React , { useContext } from 'react';
import { QuizContext } from "../helpers/Context";
import {Questions} from '../helpers/QuestionBank2'
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

    const EnterLesson3 = () => {
        setPoints(0);
        setGameState("menu");
    };

    return (
        <div className ="EndQuiz">
            <h1>Quiz Ended</h1>
            <h3>{points} / {Questions.length}</h3>
            <button className ="RedButton" onClick={restartQuiz}>Back to menu </button>
            <button className="YellowButton" onClick={EnterChatbot}>
                Speak to Chatbot
            </button>
            
            <button className="GreenButton" onClick={EnterLesson3}>
                Proceed to Lesson 3
            </button>
        </div>
        );
}

export default EndQuiz;
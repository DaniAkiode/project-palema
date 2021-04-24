import './App.css';
import React, {useState, useContext} from 'react';
import MainMenu from "./components/MainMenu";
import HomePage from "./components/HomePage";
import Quiz from "./components/Quiz";
import EndQuiz from "./components/EndQuiz";
import ChatBot from "./components/chatbot";

import { QuizContext } from './helpers/Context'


function App() {
  const [gameState, setGameState] = useState("homepage");
  const [points, setPoints] = useState(0);
  return (
    <div className="App">
      <h1 className = "h1 Title">Palema</h1>
      <QuizContext.Provider value={{gameState, setGameState, points, setPoints}}>
      {gameState === "homepage"  && <HomePage />}
      {gameState === "menu"  && <MainMenu />}
      {gameState === "quiz"  && <Quiz />}
      {gameState === "endquiz"  && <EndQuiz />}
      {gameState === "chatbot"  && <ChatBot />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;

import './App.css';
//Import Components 
import React, {useState, useContext} from 'react';
import MainMenu from "./components/MainMenu";
import HomePage from "./components/HomePage";
import Quiz from "./components/Quiz";
import Quiz2 from "./components/Quiz2";
import EndQuiz from "./components/EndQuiz";
import EndQuiz2 from "./components/EndQuiz2";
import ChatBot from "./components/chatbot";
import VocabSheet from "./components/VocabSheet"
//import QuizContext 
import { QuizContext } from './helpers/Context'

//App.js function
function App() {
  //Set varibles to useStates
  const [gameState, setGameState] = useState("homepage");
  const [points, setPoints] = useState(0);
  return (
    <div className="App">
      <h1 className = "h1 Title">Palema</h1>
      {/*Context Provider used to share varibles between components */}
      <QuizContext.Provider value={{gameState, setGameState, points, setPoints}}>
      {gameState === "homepage"  && <HomePage />}
      {gameState === "menu"  && <MainMenu />}
      {gameState === "quiz"  && <Quiz />}
      {gameState === "quiz2"  && <Quiz2 />}
      {gameState === "endquiz"  && <EndQuiz />}
      {gameState === "endquiz2"  && <EndQuiz2 />}
      {gameState === "chatbot"  && <ChatBot />}
      {gameState === "vocabsheet" && <VocabSheet />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;

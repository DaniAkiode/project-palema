import React , { useState, useContext, useEffect, useRef } from 'react';
import { QuizContext } from "../helpers/Context";
import RESPONSEDATA from "../helpers/RESPONSEDATA.json";
import "../App.css";

///Call Back funcation for backspace 
function useKey(key, cb) {

    const callbackRef = useRef(cb);
    
    useEffect(() => {
        callbackRef.current = cb;
    });

    useEffect(() => {
        function handle(event) {
            if (event.code === key) {
                callbackRef.current(event);
            }
        }

        document.addEventListener("keydown", handle);
        return () => document.removeEventListener("keydown", handle);
    },[key]);
}
//Main Function
function Chatbot(){
    //function to handle the BackSpace, deletes message if user presses the backspace 
    function handleBackSpace() {
        setClicked(false);
    }
    useKey("Backspace", handleBackSpace)

    //Declasre Varibles 
    const { gameState, setGameState } = useContext(QuizContext);
    const [userInput, setUserInput ] = useState("");
    const [clicked, setClicked] = useState(false);

    //OnSubmit function displays message if user clicks send
    const onSubmit = (event) => {
        event.preventDefault();
        setClicked(true);
    }

    return (
        <div className="ChatBot">
            <h2>E ka bo, Orukọ mi ni Anita</h2> 
            <p>Make sure you respond in yoruba only, start of by saying 'E ka ro' or 'E ka san'</p>
            <div className="ChatSpace">
                {/*Display Chatbot Message */}
                {RESPONSEDATA.filter((val) => {
                    if(userInput =="") {
                        return null
                        //If val.user is equal to the user input
                    } else if (val.user.toLowerCase() === userInput.toLowerCase()){
                        return val
                    } 
                }).map((val, key) => {
                    return(
                    <div className="chatspace" key={key}>
                        {/*If the clickes enter then <h3> tag would be displayed otherwise, display nothing */}
                        {clicked ? <h3>{val.chatbot}</h3>: null}
                        {/*{userInput.length <= 3? null: <h3>{val.chatbot}</h3>}*/}
                    </div>
                    );
                })}{/*User Input*/}
                <form className="ChatbotForm" onSubmit={onSubmit}>
                    <input type = "text"
                    placeholder="Type in response..."
                    onChange={event => 
                    {setUserInput(event.target.value)
                    }}
                    />
                    <button className="SendButton">
                        Send
                    </button>
                </form>
            </div>
            <button className ="RedButton" onClick={() => {
                setGameState("menu");
            }}>Back to menu</button>
        </div>
        );
}

export default Chatbot;
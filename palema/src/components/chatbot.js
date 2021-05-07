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
    },[key]);///(Code with Bhargav, 2019)
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
                    if (userInput == "") {
                        return null
                        //If val.user is equal to the user input
                    } else if (val.user.toLowerCase() === userInput.toLowerCase()){
                        return val
                    } 
                }).map((val, key) => {///map() would then display the text once the userInput has been validated
                    return(
                    <div className="chatspace" key={key}>
                        {/*If the clickes send then <h3> tag would be displayed otherwise, display nothing */}
                        {clicked ? <h3>{val.chatbot}</h3>: null}
                    </div>
                    )/// (PedroTech, 2020)
                })}{/*User Input*/}
                <form className="ChatbotForm" onSubmit={onSubmit}>
                    <input type ="text"
                    placeholder="Type in response..."
                    onChange={event => 
                    {setUserInput(event.target.value)
                    }}
                    />
                    <button className="SendButton">
                        Send
                    </button>{/*(Blakely, 2020)*/}
                </form>
            </div>
            <button className ="RedButton" onClick={() => {
                setGameState("menu");
            }}>Back to menu</button>
        </div>
        );
}

export default Chatbot;



///Blakely, C., 2020. How to make a Basic Form using React Hooks | Beginner React Projects. [video] Available at: <https://www.youtube.com/watch?v=8hU0I8rY4u4&list=PLUAP7Jc-AKBH-8ViMJrgzBZK07XTh4q-a&index=133&t=7s&ab_channel=ChrisBlakely> [Accessed 4 May 2021].
///Code with Bhargav, 2019. useKey | Handle keypress event | Daily react hooks. [video] Available at: <https://www.youtube.com/watch?v=YxsfJoKJZ50&list=PLUAP7Jc-AKBH-8ViMJrgzBZK07XTh4q-a&index=134&ab_channel=CodewithBhargav> [Accessed 4 May 2021].
///PedroTech, 2020. Search Filter React Tutorial - Search Bar in React. [video] Available at: <https://www.youtube.com/watch?v=mZvKPtH9Fzo&list=PLUAP7Jc-AKBEkqSCjRkkzwC6D_19K24tm&index=2&ab_channel=PedroTech> [Accessed 4 May 2021].
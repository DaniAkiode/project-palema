import React , { useContext } from 'react';
import { QuizContext } from "../helpers/Context";
import "../App.css";


function VocabSheet(){
    const { gameState, setGameState } = useContext(QuizContext);


    return (
        <div className="VocabSheet">
            <table>
                <tr>
                    <th>Word</th>
                    <th>Defenition</th>
                    <th>Translation</th>
                </tr>
                <tr>
                    <td>Kele n Sele</td>
                    <td>What's happening</td>
                    <td>Ke Lone cherleh</td>
                </tr>
                <tr>
                    <td>Ba wo ni</td>
                    <td>How are things</td>
                    <td>BA WOO KNEE</td>
                </tr>
                <tr>
                    <td>So Wa Dada</td>
                    <td>Are you good</td>
                    <td>Show wa dada</td>
                </tr>
            </table>{/*(Kayode, 2017)*/}

            <button className="GreenButton" onClick={() => {
                setGameState("menu");
            }}> Go to Menu

            </button>
        </div>
        );
}

export default VocabSheet;


///Kayode, B., 2017. Yoruba Lessons || Let's Learn Yoruba. [image] Available at: <https://www.youtube.com/watch?v=3Ne5TDM1nys&list=PLopOmpWBxN9oNrLtYezEtX9yEayfMLvJZ&ab_channel=BlessingKayode> [Accessed 4 May 2021].
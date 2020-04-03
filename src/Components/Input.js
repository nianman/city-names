import React, {useContext, useState} from 'react';
import {AnswersContext} from "../Contexts/AnswersContext";
import {DataContext} from "../Contexts/DataContext";

export default function Input() {
    const [tempWord, setTempWord] = useState('');
    const [userOne, setUserOne] = useState({
        name: "Player One",
        lives: 5
    });
    const [userTwo, setUserTwo] = useState({
        name: "Player Two",
        lives: 5
    });


    const {answer, addCity} = useContext(AnswersContext);
    const citiesContext = useContext(DataContext);

    let first = answer[0];


    function handleSubmit(e) {


        if (citiesContext.includes(tempWord.toLowerCase()) && answer.length === 0) {
            addCity(e, tempWord);
            setTempWord('');
            console.log(e)


        } else if (citiesContext.includes(tempWord.toLowerCase()) && tempWord[0].toLowerCase() === first.charAt(first.length - 1).toLowerCase()) {
            addCity(e, tempWord);
            setTempWord('');
        } else if (!citiesContext.includes(tempWord.toLowerCase()) && tempWord[0] === first.charAt(first.length - 1)) {
            e.preventDefault();
            setTempWord('');
            if (answer.length % 2 !== 1) {
                setUserOne({
                    name: "Player One",
                    lives: userOne.lives - 1
                })
            } else {
                setUserTwo({
                    name: "Player Two",
                    lives: userTwo.lives - 1
                })
            }
        } else if (tempWord[0] !== first.charAt(first.length - 1)) {
            e.preventDefault();
            setTempWord('');
            setUserOne({
                name: "Player One",
                lives: 0
            });
            setUserTwo({
                name: "Player Two",
                lives: 0
            });
        }


    }

    return (
        <div>
            {
                userOne.lives === 0 || userTwo.lives === 0 ?
                    <div>{userOne.lives === 0 ? <div>User one lost</div> : <div>User two lost</div>}</div>

                    :

                    <div>
                        <div>{
                            answer.length % 2 !== 1 ?
                                <div><p>{userOne.lives} lives left</p><span> Player 1 should write a city</span></div> :
                                <div><p>{userTwo.lives} lives left</p><span> Player 2 should write a city</span></div>

                        }
                        </div>
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <input type='text' onChange={(e) => setTempWord(e.target.value)} value={tempWord}/>
                            <input type='submit'/>
                        </form>
                        <div>
                            <p>You need the word that ends with:</p>{
                            first!==undefined?<span>{first.charAt(first.length-1)}</span>:<p></p>
                        }
                        </div>
                    </div>
            }

        </div>
    )
}

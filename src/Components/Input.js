import React, {useContext, useState} from 'react';
import {AnswersContext} from "../Contexts/AnswersContext";
import {DataContext} from "../Contexts/DataContext";
import './Components.css'
import heart from '../img/heart.png'

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


    const {answer, addCity, restart} = useContext(AnswersContext);
    const citiesContext = useContext(DataContext);

    let first = answer[0];


    function handleSubmit(e) {
        e.preventDefault();

        if (citiesContext.includes(tempWord.toLowerCase()) && answer.length === 0) {
            addCity(e, tempWord);
            setTempWord('');
            console.log(e)


        } else if (tempWord.length === 0) {
            e.preventDefault();
            console.log('bbbb')
        }else if(!citiesContext.includes(tempWord.toLowerCase())&&answer.length===0){
            e.preventDefault();
        } else if ((!citiesContext.includes(tempWord.toLowerCase()) || answer.includes(tempWord)) && tempWord[0].toLowerCase() === first.charAt(first.length - 1).toLowerCase()) {
            console.log('aaaaaa');
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
        } else if (citiesContext.includes(tempWord.toLowerCase()) && tempWord[0].toLowerCase() === first.charAt(first.length - 1).toLowerCase() && !answer.includes(tempWord)) {
            addCity(e, tempWord);
            setTempWord('');
        } else if (tempWord[0].toLowerCase() !== first.charAt(first.length - 1).toLowerCase()) {
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

    function handleRestart(e) {
        setUserOne({
            name: "Player One",
            lives: 5
        });
        setUserTwo({
            name: "Player Two",
            lives: 5
        });
        restart(e)
    }

    function handleExit() {
        window.open("about:blank", "_self");
        window.close();
    }

    return (
        <div>
            {

                userOne.lives === 0 || userTwo.lives === 0 ?
                    <div className='over'>
                        <h3 className='over-restart' onClick={(e) => handleRestart()}>Restart</h3>
                        <h2 className='over-game'>GAME OVER</h2>
                        {userOne.lives === 0 ? <p className='over-player'>Player 1 is a winner!</p> :
                            <p className='over-player'>Player 2 is a winner!</p>}
                        <h5 className='over-exit' onClick={handleExit}>Exit</h5>
                    </div>
                    :

                    <div className='input'>
                        <div className='input--next-city'>
                            <p>Next Letter: {
                                first !== undefined ?
                                    <span className='red-text'>"{first.charAt(first.length - 1).toUpperCase()}"</span> :
                                    <span className='red-text'>" "</span>
                            }</p>
                        </div>
                        <div className='input-label'>{
                            answer.length % 2 !== 1 ?
                                <div className='input-text'><span className='input-player'> Player 1</span> should write
                                    a city</div> :
                                <div className='input-text'><span className='input-player'> Player 2</span> should write
                                    a city</div>

                        }
                        </div>
                        <form className='form' onSubmit={(e) => handleSubmit(e)}>
                            <input autoFocus='true' className='form-input' type='text'
                                   onChange={(e) => setTempWord(e.target.value)}
                                   value={tempWord}/>
                            <input className='form-submit' type='submit' value='SUBMIT'/>
                        </form>
                        <div>
                            <div>
                                <h3 className='lives-player'>Player 1</h3>
                                <div>
                                    {
                                        [...Array(userOne.lives)].map(item => {
                                            return (<img alt='heart' src={heart} width='30px'/>)
                                        })
                                    }
                                </div>
                            </div>
                            <div>
                                <h3 className='lives-player'>Player 2</h3>
                                <div>
                                    {
                                        [...Array(userTwo.lives)].map(item => {
                                            return (<img alt='heart' src={heart} width='30px'/>)
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
            }

        </div>
    )
}

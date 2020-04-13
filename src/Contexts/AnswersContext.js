import React, {createContext, useState} from 'react';

export const AnswersContext = createContext();

export default function AnswersContextProvider(props) {
    const [answer, setAnswer] = useState([]);
    function addCity(e, param) {
        e.preventDefault();
        setAnswer([ param,...answer])
      //  console.log('answer', answer)
    }
    function restart(e) {
        setAnswer([]);
    }
    return(
        <AnswersContext.Provider value={{ answer,  addCity, restart}}>
            {props.children}
        </AnswersContext.Provider>
    )
}
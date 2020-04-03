import React, {useContext} from 'react';
import {DataContext} from '../Contexts/DataContext'
import {AnswersContext} from "../Contexts/AnswersContext";
export default function NextCity() {
    const citiesContext = useContext(DataContext);
    const {answer, addCity} = useContext(AnswersContext);


    let first = answer[0];
    return(
        <div>



            {answer.map((item, index)=>{
                return(<li key={index}>{item}</li>)
            })}
        </div>
    )
}
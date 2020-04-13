import React, {useContext} from 'react';
import {DataContext} from '../Contexts/DataContext'
import {AnswersContext} from "../Contexts/AnswersContext";
import './Components.css'

export default function NextCity() {
    const {answer, addCity} = useContext(AnswersContext);


    return(
        <div className='list'>


            List of used cities:
            <ul className='list-box'>
            {answer.map((item, index)=>{
                return(<li className='list-item' key={index}>{item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()}</li>)
            })}
            </ul>
        </div>
    )
}
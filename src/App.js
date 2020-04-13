import React from 'react';
import DataContextProvider from './Contexts/DataContext'
import './App.css';
import Input from './Components/Input'
import NextCity from './Components/NextCity';
import AnswersContextProvider from './Contexts/AnswersContext';
import cities from './img/cities.png'

function App() {
    return (
        <div className="App">
            <div className='logo'>
                <img src={cities} alt='logo' width='20%' height='20%' />
            </div>

            <DataContextProvider>
                <AnswersContextProvider>
                    <div className='play-field'>
                        <Input/>
                        <NextCity/>
                    </div>

                </AnswersContextProvider>
            </DataContextProvider>
        </div>
    );
}

export default App;

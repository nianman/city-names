import React from 'react';
import  DataContextProvider from './Contexts/DataContext'
import './App.css';
import Input from './Components/Input'
import NextCity from './Components/NextCity';
import AnswersContextProvider from './Contexts/AnswersContext';

function App() {
  return (
    <div className="App">
      <DataContextProvider>
          <AnswersContextProvider>
                  <Input />
              <NextCity/>
          </AnswersContextProvider>
      </DataContextProvider>
    </div>
  );
}

export default App;

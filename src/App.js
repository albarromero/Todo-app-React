import React from 'react';
import './App.css';
import Form from './components/Form';

const  App = () => {
  return (
    <div className="App">
      <div className="App-content">
        <h1>
          TO-DO list
        </h1>
        <Form/>
      </div>
    </div>
  );
}

export default App;
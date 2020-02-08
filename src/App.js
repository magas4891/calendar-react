import React from 'react';
import logo from './logo.svg';
import './App.css';
import Container from './Container'

class App extends React.Component {
    
    render() {
        return(
            <div className='App'>
                <h1>This is React Calendar</h1>
                <Container />
            </div>
        )
    }   
}

export default App;

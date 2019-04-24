import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Buttons from './components/Buttons';
import Home from './components/Home';

const App=()=>{
    return(
        <div>
            <Header/>
            <Buttons/>
            <Home/>
        
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));


import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Buttons from './components/Buttons';
import Slider from './components/Slider';
const App=()=>{
    return(
        <div>
            <Header/>
            <Buttons/>
            <Slider/>
        
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));


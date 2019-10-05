import React from 'react';
import ReactDOM from 'react-dom';
import Signin from './components/Signin';
import Navigate from './components/Navigate';


import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Navbar,Nav,Form,FormControl } from 'react-bootstrap';
const App=()=>{
    return(
        <div id='main'>
          <Navigate/>
            <Home/>
            <Signin/>
        </div>

    )
}

ReactDOM.render(<App />, document.getElementById('root'));


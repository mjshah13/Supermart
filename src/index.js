import React from 'react';
import ReactDOM from 'react-dom';
import Navigate from './components/Navigate';
import Cards from './components/Cards';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';

const App=()=>{
    return(
        <div id='main'>
          <Navigate/>
            <Home/>
            <Cards/>
            <Footer/>
        </div>

    )
}

ReactDOM.render(<App />, document.getElementById('root'));


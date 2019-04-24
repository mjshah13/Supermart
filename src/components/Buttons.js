import React from 'react';
import ReactDOM from 'react-dom';


class Buttons extends React.Component{

    render(){
        return(
            <div>
           
            
               
                <header className='buttonPanel'>
                <button id="homebutton" >HOME</button>
                <button >ITEMS</button>
                <button >OFFERS</button>
                <button >BRANCHES</button>
                <button >MEMBERSHIP</button>
                <button >ABOUT US</button>
               
                
            

                </header>
                   
           
            </div>
            
        )
    }

}
export default Buttons;
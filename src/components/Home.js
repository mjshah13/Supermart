import React from 'react';

import {FormControl,Col,FormGroup,Form ,validated,InputGroup,Button} from 'react-bootstrap';

class Home extends React.Component{

    render(){
       
        return(
        <div id='parent'>
             <p className='description'> Modern online and 
             offline payment of Africa</p>
        
          
        
 
             <div className='imgDiv'>
        
                <img id='pic' src={require('../assets/Capture.PNG')} />
          
         
        
                    
           
 
 
             </div>
     
            </div>
        
        )
    }

}
export default Home;
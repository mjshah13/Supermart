import React from 'react';
import ReactDOM from 'react-dom';


class Home extends React.Component{

    render(){
        return(
            <div className="slider">
           
            <img className="image" src={require('../assets/mart.jpg')} />
               
            
            <div className="intro">
                <text>
                Supermarkets have all the water uses of typical retail outlets, such as sanitary fixtures and landscape irrigation, plus much more.  Supermarkets possess certain specialized water uses that provide large water conservation opportunities.  The most notable is the water used to cool the condensers units for the refrigeration systems, such as display coolers and freezers, storage coolers and freezers, butcher shops, delis, bakeries, etc.   In addition, considerable water is used in the cleaning and preparation of the fresh produce, meats, and fish before the products are put onto the shelves.   
                    </text>
            </div>
            </div>
        )
    }

}
export default Home;
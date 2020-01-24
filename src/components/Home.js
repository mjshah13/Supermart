import React from 'react';

import {Card,Button,Badge,Carousel,Accordion} from 'react-bootstrap';

class Home extends React.Component{

    render(){
       
        return(
        <div id='parent'>

            <div id='sliderCard'>
            <Carousel id='slider'>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require('../assets/one.jpg')}
      alt="First slide"
    />
   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require('../assets/two.jpg')}
      alt="Third slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require('../assets/three.jpg')}
      alt="Third slide"
    />

  </Carousel.Item>
</Carousel>
            </div>
          
            </div>
        
        )
    }

}
export default Home;
import React from 'react';
import {Card,Button,Badge} from 'react-bootstrap';




class Cards extends React.Component{
    render(){
        return(

<div className="cards" id='card'>
<Card className="cards" style={{ width: '18rem' }}>
<Card.Img  variant="top" src={require('../assets/banner.jpg')} />
<Card.Body>
<Card.Title>Diamond Necklace</Card.Title>
<Card.Text>
This chic modern necklace designs are the latest addition to the diamond segment called ‘Diamoon’ and are available at all Auctioneer's stores at an affordable price just worth  99,999$ from 23 rd  November to 31st  December 2019.
</Card.Text>
<Button variant="outline-primary">Bid now </Button>
<Badge className="badgeCard" variant="danger"> 890+ Bids</Badge>
</Card.Body>
</Card>
<Card className="cards" style={{ width: '18rem' }}>
<Card.Img variant="top" src={require('../assets/second.jpg')} />
<Card.Body>
<Card.Title>Diamond Ring</Card.Title>
<Card.Text>
This chic modern necklace designs are the latest addition to the diamond segment called ‘Diamoon’ and are available at all Auctioneer's stores at an affordable price just worth  25000$ from 23 rd  November to 31st  December 2019.
</Card.Text>
<Button variant="outline-primary">Bid now</Button>
<Badge className="badgeCard" variant="danger"> 3k+ Bids</Badge>
</Card.Body>
</Card>
<Card className="cards" style={{ width: '18rem' }}>
<Card.Img variant="top" src={require('../assets/third.jpg')} />
<Card.Body>
<Card.Title>Gold Earings</Card.Title>
<Card.Text>
This chic modern necklace designs are the latest addition to the diamond segment called ‘Diamoon’ and are available at all Auctioneer's stores at an affordable price just worth  25000$ from 23 rd  November to 31st  December 2019.
</Card.Text>
<Button variant="outline-primary">Bid now</Button>
<Badge className="badgeCard" variant="danger"> 1.2k+ Bids</Badge>
</Card.Body>
</Card>
<Card className="cards" style={{ width: '18rem' }}>
<Card.Img variant="top" src={require('../assets/fourth.jpg')} />
<Card.Body>
<Card.Title>Diamond Set</Card.Title>
<Card.Text>
This chic modern necklace designs are the latest addition to the diamond segment called ‘Diamoon’ and are available at all Auctioneer's stores at an affordable price just worth  25000$ from 23 rd  November to 31st  December 2019.
</Card.Text>
<Button variant="outline-primary">Bid now</Button>
<Badge className="badgeCard" variant="danger"> 34.7k+ Bids</Badge>
</Card.Body>
</Card>

</div>
        );

    }
}

export default Cards;
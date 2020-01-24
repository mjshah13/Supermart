import React from 'react';



import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Navbar,Nav,Form,FormControl,NavDropdown,Badge } from 'react-bootstrap';
import { NavbarBrand } from 'reactstrap';
import Sidebutton from './Sidebutton';
import Searchbutton from './Searchbutton';
 
    

class Navigate extends React.Component{
 
render(){
    return(
        
  <Navbar expand="lg " bg="light" variant="light" id="navbar">
    <NavbarBrand>
<Sidebutton id='side'/>
    </NavbarBrand>
  <Navbar.Brand id="auc" href="#home" size='bg'>AUTIONEER'S</Navbar.Brand>
  <Nav id="mr-auto">
  <NavDropdown className='navOp' title="Autions" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#latest">Latest  <Badge variant="danger">10+</Badge></NavDropdown.Item>
        <NavDropdown.Item href="#trending">Trending <Badge variant="danger">6+</Badge></NavDropdown.Item>
        <NavDropdown.Item href="#newarrive">New Arrival <Badge variant="danger">14+</Badge></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#more">See more+</NavDropdown.Item>
      </NavDropdown>
 
    <Nav.Link className='navOp' href="#locations">Location</Nav.Link>
    <Nav.Link className='navOp' href="#departs">Department</Nav.Link>
    <Nav.Link className='navOp' href="#services">Services</Nav.Link>
    <Nav.Link className='navOp' href="#services">Contact Us</Nav.Link>
  </Nav>
  <Form inline>
  <Button variant="light"  id='signbutton' >Sign in</Button>
    <FormControl type="text" placeholder="Search jewellery" id='searchform' />
    <Button variant="light" id='search'>Search</Button>
  </Form>
  <NavbarBrand>
    <Searchbutton/>
  </NavbarBrand>
</Navbar>

        
    )


    
}
}
  export default Navigate;
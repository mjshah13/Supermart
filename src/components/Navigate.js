import React from 'react';



import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Navbar,Nav,Form,FormControl,NavDropdown } from 'react-bootstrap';


class Navigate extends React.Component{
render(){
    return(
        
  <Navbar expand="lg " bg="primary" variant="dark">
  <Navbar.Brand id='pay' href="#home" size='bg'>Safe Pay</Navbar.Brand>
  <Nav className="mr-auto">
  <NavDropdown className='navOp' title="Why Pay Safe?" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Easy To Use</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">More Secure</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Strong Community</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Learn More</NavDropdown.Item>
      </NavDropdown>
 
    <Nav.Link className='navOp' href="#features">Customer</Nav.Link>
    <Nav.Link className='navOp' href="#pricing">Pricing</Nav.Link>
  </Nav>
  <Form inline>
    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
    <Button variant="primary">Search</Button>
  </Form>
</Navbar>

        
    )


    
}
}
  export default Navigate;
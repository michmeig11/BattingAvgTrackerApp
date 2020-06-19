import React, {useState} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Button
} from 'reactstrap';

const Sitebar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle =() =>{
        let newIsOpen =!isOpen;
        setIsOpen(newIsOpen);
    }
   
    return (
        <Navbar color = "faded" light expand ='md'>
            <NavbarBrand id="tracker" href="./login">Batting Average Tracker</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className ="ml-auto" navbar>
                    <NavItem>
                        <Button id="loginbutton" onClink={toggle} href= "./login">Login </Button>
                        <Button id="signupbutton" onClink={toggle} href= "./signup">Sign Up </Button>
                        <Button id="logoutbutton" onClick={props.clickLogout}>Logout</Button>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Sitebar;


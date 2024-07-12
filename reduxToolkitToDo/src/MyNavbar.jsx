import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

const MyNavbar = () => {
  return (<>
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
      </Navbar.Brand>
      <Nav className="me-auto">
      <Nav.Link 
      href="#home" 
      style={{ 
        color: 'white', 
        fontSize: '20px', 
        textDecoration: 'none', 
        padding: '10px 30px', 
        borderRadius: '9px', 
        backgroundColor: '#667eea', // Bootstrap primary color
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow
        transition: 'all 0.3s ease', // Smooth transitions
        display: 'inline-block' // Ensure the link fits content nicely
      }}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = '#5a67d8'; // Darker blue on hover
        e.target.style.color = '#ffffff'; // Ensure text color remains white
        e.target.style.transform = 'scale(1.05)'; // Slightly enlarge on hover
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = '#667eea'; // Revert to original color
        e.target.style.color = '#ffffff'; // Ensure text color remains white
        e.target.style.transform = 'scale(1)'; // Revert size
      }}
    >
      Home
    </Nav.Link>
    <Nav.Link 
      href="#home" 
      style={{ 
        color: 'white', 
        fontSize: '20px', 
        textDecoration: 'none', 
        padding: '10px 80px', 
        borderRadius: '9px', 
        backgroundColor: '#667eea', // Bootstrap primary color
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow
        transition: 'all 0.3s ease', // Smooth transitions
        display: 'inline-block' // Ensure the link fits content nicely
      }}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = '#5a67d8'; // Darker blue on hover
        e.target.style.color = '#ffffff'; // Ensure text color remains white
        e.target.style.transform = 'scale(1.05)'; // Slightly enlarge on hover
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = '#667eea'; // Revert to original color
        e.target.style.color = '#ffffff'; // Ensure text color remains white
        e.target.style.transform = 'scale(1)'; // Revert size
      }}
    >
      Features
    </Nav.Link>
    <Nav.Link 
      href="#home" 
      style={{ 
        color: 'white', 
        fontSize: '20px', 
        textDecoration: 'none', 
        padding: '10px 30px', 
        borderRadius: '9px', 
        backgroundColor: '#667eea', // Bootstrap primary color
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow
        transition: 'all 0.3s ease', // Smooth transitions
        display: 'inline-block' // Ensure the link fits content nicely
      }}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = ' #5a67d8'; // Darker blue on hover
        e.target.style.color = '#ffffff'; // Ensure text color remains white
        e.target.style.transform = 'scale(1.05)'; // Slightly enlarge on hover
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = '#667eea'; // Revert to original color
        e.target.style.color = '#ffffff'; // Ensure text color remains white
        e.target.style.transform = 'scale(1)'; // Revert size
      }}
    >
      List
    </Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  </>
  );
};

export default MyNavbar;

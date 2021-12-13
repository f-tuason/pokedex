// React v17 does not need a import React

// Import components from Bootstrap 5
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

export const NavBar = () => {
  return (
    <Navbar variant="dark" bg="dark" expand="lg">
      <Container>
        <Navbar.Brand>Pokedex</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavBar;

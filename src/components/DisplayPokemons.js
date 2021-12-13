// Version 17 does not need the import React from "react";

// Import components from react-router-dom
import { Link } from "react-router-dom";

// Import components from react-redux
import { useSelector } from "react-redux";

// Import components from Bootstrap 5
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const DisplayPokemons = () => {
  // Get Pokemons from store
  let pokemons = useSelector((state) => state.Pokemons);

  return (
    <Container>
      <Row>
        <Col className="pt-4">
          {pokemons
            .sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))
            .map((pokemon) => {
              return (
                <Link key={pokemon.ntnlnum} to={`/${pokemon.name}`}>
                  <Button
                    variant="success"
                    style={{ marginRight: "10px", marginBottom: "10px" }}
                  >
                    {pokemon.name}
                  </Button>
                </Link>
              );
            })}
        </Col>
      </Row>
    </Container>
  );
};

export default DisplayPokemons;

// Version 17 does not need the import React from "react";

// Import components from react-redux
import { useSelector } from "react-redux";

// Import components from react-router-dom
import { Link } from "react-router-dom";

// Import components from Bootstrap 5
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const DisplayPokemonTypes = () => {
  // Get pokemonTypes from store
  let pokemonTypes = useSelector((state) => state.PokemonTypes);
  let pokemonBgColor = useSelector((state) => state.PokemonBgColor);

  return (
    <Container>
      <Row>
        <Col className="pt-4">
          {pokemonTypes
            // .sort((a, b) => (a.type > b.type ? 1 : b.type > a.type ? -1 : 0))
            .map((pokemonType, index) => {
              return (
                <Link key={pokemonType.type} to={`/types/${pokemonType.type}`}>
                  <Button
                    variant={pokemonBgColor[index]}
                    style={{
                      marginRight: "10px",
                      marginBottom: "10px",
                      backgroundColor: pokemonBgColor[index],
                    }}
                  >
                    {pokemonType.type}
                  </Button>
                </Link>
              );
            })}
        </Col>
      </Row>
    </Container>
  );
};

export default DisplayPokemonTypes;

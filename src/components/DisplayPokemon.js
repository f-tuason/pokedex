// Version 17 does not need the import React from "react";

// Import components from react-router-dom
import { useParams, Link } from "react-router-dom";

// Import components from react-redux
import { useSelector, useDispatch } from "react-redux";

// Import useEffect from react
import { useEffect } from "react";

// Import components from Bootstrap 5
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

// import component from Local components
import NotFound from "./NotFound";

// Display a single Pokemon
const DisplayPokemon = () => {
  // Get from pokemonname
  const { pokemonname } = useParams();

  // Declare dispatch
  const dispatch = useDispatch();

  // Get all Pokemons from store
  let pokemons = useSelector((state) => state.Pokemons);

  // Call reducer in component start
  useEffect(() => {
    dispatch({ type: "SET_POKEMON", payload: true });
  });

  let filterPokemons = () => {
    let cnt = pokemons.filter((pokemon) => pokemon.name === pokemonname);
    if (cnt.length === 0) {
      return <NotFound />;
    } else {
      return cnt
        .sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))
        .map((pokemon) => {
          return (
            <Row key={pokemon.ntnlnum}>
              <Col className="pt-3">
                <h2>{pokemon.name}</h2>
                <img
                  src={pokemon.image}
                  alt={pokemon.name}
                  width={200}
                  className="pt-3 pb-3"
                />
                <p>{pokemon.description}</p>
                {pokemon.types.map((item) => (
                  <Link key={item} to={`/types/${item}`}>
                    <Button
                      style={{ marginRight: "10px", marginBottom: "10px" }}
                    >
                      {item}
                    </Button>
                  </Link>
                ))}
              </Col>
            </Row>
          );
        });
    }
  };

  return <Container>{filterPokemons()}</Container>;
};

export default DisplayPokemon;

// React-Redux Components
import { useSelector, useDispatch } from "react-redux";

// Import from react-router-dom
import { useHistory } from "react-router-dom";

// Bootstrap 5 Components
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const TogglePokemon = () => {
  // Declare togglePokemon, get from Store
  let togglePokemon = useSelector((state) => state.togglePokemon);

  // Declare dispatch
  const dispatch = useDispatch();

  // Declare history
  const history = useHistory();

  // Handler for Click
  const TogglePokemonDispatch = () => {
    // Run reducer function
    dispatch({ type: "TOGGLE_POKEMON" });
    // Call history with push to root
    history.push("/");
  };

  return (
    <Container>
      <Row>
        <Col className="d-grid gap-2 pt-3">
          <p>
            The Pokédex (ポケモン図鑑, Pokemon Zukan, lit. "Illustrated Pokémon
            Encyclopedia") is an electronic device designed to catalogue and
            provide information regarding the various species of Pokémon
            featured in the Pokémon video game, anime and manga series. The name
            Pokédex is a neologism including "Pokémon" (which itself is a
            portmanteau of "pocket" and "monster") and "index". The Japanese
            name is simply "Pokémon Encyclopedia", as it can feature every
            Pokémon on it, depending on the Pokédex.
          </p>
          <p>
            Clicking on the button below will toggle from 'List of Pokemons' and
            'Pokemon Types'.
          </p>
          {togglePokemon ? (
            <Button variant="success" onClick={TogglePokemonDispatch}>
              List of Pokemons
            </Button>
          ) : (
            <Button variant="primary" onClick={TogglePokemonDispatch}>
              Pokemon Types
            </Button>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default TogglePokemon;

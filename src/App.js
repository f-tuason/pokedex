// Version 17 does not need the import React from "react";

// Import components from react-redux
import { useSelector } from "react-redux";

// Import components from react-router-dom
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Import user defined components
import NavBar from "./components/NavBar";
import TogglePokemon from "./components/TogglePokemon";
import DisplayPokemon from "./components/DisplayPokemon";
import DisplayPokemons from "./components/DisplayPokemons";
import DisplayPokemonType from "./components/DisplayPokemonType";
import DisplayPokemonTypes from "./components/DisplayPokemonTypes";

const App = () => {
  // Get togglePokemon from store
  const togglePokemon = useSelector((state) => state.togglePokemon);

  return (
    <>
      <Router>
        {/* Display Menubar */}
        <NavBar />

        {/* Display TogglePokemon Component */}
        <TogglePokemon />

        {/* Depending on togglePokemon, display the correct component */}
        {togglePokemon ? <DisplayPokemons /> : <DisplayPokemonTypes />}

        <Switch>
          {/* DisplayPokemonType component */}
          <Route path="/types/:type">
            <DisplayPokemonType />
          </Route>

          {/* DisplayPokemon component */}
          <Route path="/:pokemonname">
            <DisplayPokemon />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;

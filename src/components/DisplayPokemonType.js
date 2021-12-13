// Version 17 does not need the import React from "react";
import { useEffect } from "react";

// Import components from react-router-dom
import { useParams, Link } from "react-router-dom";

// Import components from react-redux
import { useSelector, useDispatch } from "react-redux";

// Import components from Bootstrap 5
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const DisplayPokemonType = () => {
  // Get slug "type" from userParams
  const { type } = useParams();

  // Get variables from Store
  let pokemons = useSelector((state) => state.Pokemons);

  let dispatch = useDispatch();

  // Call reducer in component start
  useEffect(() => {
    dispatch({ type: "SET_POKEMON", payload: false });
  });

  return (
    <Container className="pt-3">
      <Row>
        <Table striped bordered hover>
          {/* Not able to style component, used Table, did not bother with thead and tbody tags, don't know if that is good */}
          <thead>
            <tr align="center">
              <th>Name</th>
              <th>Image</th>
              <th>Type</th>
            </tr>
          </thead>
          {/* Filter pokemon based on type */}
          <tbody>
            {pokemons
              .filter((pokemon) => {
                if (type === "All") {
                  return pokemon;
                }
                return pokemon.types.includes(type);
              })
              .sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))
              .map((pokemon) => (
                <tr key={pokemon.ntnlnum} align="center" valign="middle">
                  <td width="20%">
                    {/* Display name with link to pokemon */}
                    <Link to={`/${pokemon.name}`}>
                      <Button variant="success">{pokemon.name}</Button>
                    </Link>
                  </td>
                  <td width="50%">
                    {/* Display image, with width attribute to resize */}
                    <img src={pokemon.image} alt={pokemon.name} width={100} />
                  </td>
                  <td width="30%">
                    {/* Display all types of pokemon and display link to a single type */}
                    {pokemon.types.map((item) => (
                      <Link key={item} to={`/types/${item}`}>
                        <Button
                          variant="primary"
                          style={{ marginRight: "10px", marginBottom: "10px" }}
                        >
                          {item}
                        </Button>
                      </Link>
                    ))}
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Row>
    </Container>
  );
};

export default DisplayPokemonType;

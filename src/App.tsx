import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import useGames from "./hooks/useGames";
import GenreList from "./components/GenreList";

function App() {
  const { games, error, isLoading, setGames, setError } = useGames();

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, // 1024px
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          <GenreList />
        </GridItem>
      </Show>

      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;

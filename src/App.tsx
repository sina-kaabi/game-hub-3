import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import useGames from "./hooks/useGames";
import GenreList from "./components/GenreList";
import useData from "./hooks/useData";
import { Genre } from "./hooks/useGenres";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );

  const handleSelectGenre = (genre: Genre) => {
    setSelectedGenre(genre);
  };

  //const visibleGenres = selectedGenre
  //  ? genres.filter((e) => e.genre === selectedGenre)
  // : genres;

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, // 1024px
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenre={selectedGenre}
            // genres={visibleGenres}
            // selectedGenre={selectedGenre}
            onSelectGenre={(genre) => setSelectedGenre(genre)}
          />
        </GridItem>
      </Show>

      <GridItem area="main">
        <PlatformSelector
          selectedPlatform={selectedPlatform}
          onSelectPlatform={(platform) => setSelectedPlatform(platform)}
        />
        <GameGrid
          selectedPlatform={selectedPlatform}
          selectedGenre={selectedGenre}
        />
      </GridItem>
    </Grid>
  );
}

export default App;

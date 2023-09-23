import { Heading } from "@chakra-ui/react";

import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  // Check if both platform and genre are available before rendering
  const hasPlatform = gameQuery.platform?.name;
  const hasGenre = gameQuery.genre?.name;

  const platformText = hasPlatform ? gameQuery.platform!.name : "";
  const genreText = hasGenre ? gameQuery.genre!.name : "";

  const heading = `${platformText} ${genreText} Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;

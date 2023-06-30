import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";
import getGenre from "../hooks/useGenre";
import getPlatform from "../hooks/usePlatform";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const genre = getGenre(gameQuery.genreId);
  const platform = getPlatform(gameQuery.platformId);

  const header = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading as="h1" fontSize={"5xl"} marginY={3}>
      {header}
    </Heading>
  );
};

export default GameHeading;

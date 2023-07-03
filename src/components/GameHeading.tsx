import { Heading } from "@chakra-ui/react";
import getGenre from "../hooks/useGenre";
import getPlatform from "../hooks/usePlatform";
import useGameQueryStore from "../stores/gameQueryStore";

const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = getGenre(genreId);

  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = getPlatform(platformId);

  const header = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading as="h1" fontSize={"5xl"} marginY={3}>
      {header}
    </Heading>
  );
};

export default GameHeading;

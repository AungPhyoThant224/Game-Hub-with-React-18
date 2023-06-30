import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatform from "../hooks/usePlatform";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const genre = genres.results.find((genre) => genre.id === gameQuery.genreId);

  const { data: platforms } = usePlatform();
  const platform = platforms.results.find(
    (platform) => platform.id === gameQuery.platformId
  );

  const header = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading as="h1" fontSize={"5xl"} marginY={3}>
      {header}
    </Heading>
  );
};

export default GameHeading;

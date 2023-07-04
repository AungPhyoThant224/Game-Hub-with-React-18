import { GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameScreenshots from "../components/GameScreenshots";
import GameTrailer from "../components/GameTrailer";
import useGameDetails from "../hooks/useGamesDetails";

const GameDetailsPage = () => {
  const param = useParams();
  const { data: game, isLoading, error } = useGameDetails(param.slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <>
      <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={5}>
        <GridItem>
          <Heading as="h2" size="xl">
            {game.name}
          </Heading>
          <ExpandableText text={game.description_raw} />
          <GameAttributes game={game} />
        </GridItem>
        <GridItem>
          <GameTrailer gameId={game.id} />
          <GameScreenshots gameId={game.id} />
        </GridItem>
      </SimpleGrid>
    </>
  );
};

export default GameDetailsPage;

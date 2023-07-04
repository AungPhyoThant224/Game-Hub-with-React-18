import { Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useGameDetails from "../hooks/useGamesDetails";
import ExpandableText from "../components/ExpandableText";
import DefinationItem from "../components/DefinationItem";
import CriticScore from "../components/CriticScore";
import GameAttributes from "../components/GameAttributes";

const GameDetailsPage = () => {
  const param = useParams();
  const { data: game, isLoading, error } = useGameDetails(param.slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <>
      <Heading as="h2" size="xl">
        {game.name}
      </Heading>
      <ExpandableText text={game.description_raw} />
      <GameAttributes game={game} />
    </>
  );
};

export default GameDetailsPage;

import { Heading, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useGameDetails from "../hooks/useGamesDetails";

const GameDetailsPage = () => {
  const param = useParams();
  const { data, isLoading, error } = useGameDetails(param.slug!);

  if (isLoading) return <Spinner />;

  if (error || !data) throw error;

  return (
    <>
      <Heading as="h2" size="xl">
        {data.name}
      </Heading>
      <Text fontSize="xl">{data.description_raw}</Text>
    </>
  );
};

export default GameDetailsPage;

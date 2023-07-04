import { Box, SimpleGrid, Image } from "@chakra-ui/react";
import useGameScreenshots from "../hooks/useGameScreenshots";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, error, isLoading } = useGameScreenshots(gameId);

  if (isLoading) return <></>;

  if (error) throw error;

  const images = data?.results;
  return images ? (
    <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={6}>
      {images.map((img) => (
        <Box key={img.id}>
          <Image src={img.image} alt="" />
        </Box>
      ))}
    </SimpleGrid>
  ) : (
    <></>
  );
};

export default GameScreenshots;

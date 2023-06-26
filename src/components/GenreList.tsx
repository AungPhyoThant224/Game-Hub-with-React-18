import {
  Box,
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  if (error) return;

  return (
    <>
      {isLoading &&
        skeleton.map((s) => (
          <HStack key={s} paddingY={"5px"}>
            <Skeleton width={"40px"} height={"32px"} borderRadius={8} />
            <Box width={"100%"}>
              <SkeletonText mt="1" noOfLines={1} />
            </Box>
          </HStack>
        ))}
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY={"5px"}>
            <HStack>
              <Image
                boxSize={"32px"}
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Text fontSize={"lg"}>{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;

import useGeners from "./useGenres";

const getGenre = (id?: number) => {
  const { data } = useGeners();
  return data.results.find((genre) => genre.id === id);
};

export default getGenre;

import usePlatforms from "./usePlatforms";

const getPlatform = (id?: number) => {
  const { data } = usePlatforms();
  return data.results.find((platform) => platform.id === id);
};

export default getPlatform;

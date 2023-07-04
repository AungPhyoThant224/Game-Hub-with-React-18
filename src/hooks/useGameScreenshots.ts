import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import ms from "ms";
import GameScreenshots from "../entities/GameScreenshots";

const useGameScreenshots = (gameId: number) => {
  const apiClient = new APIClient<GameScreenshots>(
    `/games/${gameId}/screenshots`
  );
  return useQuery<FetchResponse<GameScreenshots>, Error>({
    queryKey: ["gameScreenshots", gameId],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
  });
};

export default useGameScreenshots;

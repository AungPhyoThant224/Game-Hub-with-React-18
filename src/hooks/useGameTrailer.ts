import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import ms from "ms";
import GameTrailer from "../entities/GameTrailer";

const useGameTrailer = (gameId: number) => {
  const apiClient = new APIClient<GameTrailer>(`/games/${gameId}/movies`);
  return useQuery<FetchResponse<GameTrailer>, Error>({
    queryKey: ["gameTrailer", gameId],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
  });
};

export default useGameTrailer;

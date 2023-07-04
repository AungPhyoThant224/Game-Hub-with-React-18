import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import ms from "ms";
import { Game } from "../entities/Game";

const apiClient = new APIClient<Game>("/games");

const useGameDetails = (slug: string) => {
  return useQuery<Game, Error>({
    queryKey: ["gameDetail", slug],
    queryFn: () => apiClient.getDetails(slug),
    staleTime: ms("1m"),
  });
};

export default useGameDetails;

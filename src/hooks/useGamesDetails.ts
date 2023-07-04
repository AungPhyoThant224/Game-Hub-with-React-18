import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import ms from "ms";

interface GameDetails {
  id: number;
  slug: string;
  name: string;
  description_raw: string;
}
const apiClient = new APIClient<GameDetails>("/games");

const useGameDetails = (slug: string) => {
  return useQuery<GameDetails, Error>({
    queryKey: ["gameDetail", slug],
    queryFn: () => apiClient.getDetails(slug),
    staleTime: ms("1m"),
  });
};

export default useGameDetails;

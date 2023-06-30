import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import genres from "../data/genres";
import ms from "ms";

const apiClient = new APIClient<Genre>("/genres");
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => {
  return useQuery<FetchResponse<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: apiClient.get,
    staleTime: ms("24h"), //24 hours
    initialData: genres,
  });
};

export default useGenres;

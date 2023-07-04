import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import genres from "../data/genres";
import ms from "ms";
import Genre from "../entities/Genre";

const apiClient = new APIClient<Genre>("/genres");
const useGenres = () => {
  return useQuery<FetchResponse<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"), //24 hours
    initialData: genres,
  });
};

export default useGenres;

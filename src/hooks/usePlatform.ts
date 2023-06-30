import { useQuery } from "@tanstack/react-query";
import platform from "../data/platform";
import { FetchResponse } from "./useData";
import apiClient from "../services/api-client";
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatform = () => {
  return useQuery<FetchResponse<Platform>, Error>({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: platform.length, results: platform },
  });
};

export default usePlatform;

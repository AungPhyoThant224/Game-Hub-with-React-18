import { useQuery } from "@tanstack/react-query";
import platform from "../data/platform";
import APIClient, { FetchResponse } from "../services/api-client";

const apiClient = new APIClient<Platform>("platforms/lists.parents");
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatform = () => {
  return useQuery<FetchResponse<Platform>, Error>({
    queryKey: ["platforms"],
    queryFn: apiClient.get,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: platform.length, next: null, results: platform },
  });
};

export default usePlatform;

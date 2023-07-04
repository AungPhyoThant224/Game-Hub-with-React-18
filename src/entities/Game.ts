import Genre from "./Genre";
import Platform from "./Platform";
import Publisher from "./Publisher";

export default interface Game {
  id: number;
  name: string;
  slug: string;
  description_raw: string;
  genres: Genre[];
  publishers: Publisher[];
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

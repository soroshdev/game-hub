import useData from "./useData";
import type { Genre } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (selecredGenre: Genre | null) =>
  useData<Game>("/games", { params: { genres: selecredGenre?.id } }, [
    selecredGenre?.id,
  ]);

export default useGames;

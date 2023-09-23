import useData from "./useData";
import { Genre } from "./useGenres";
import { GameQuery } from "../App";

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
    rating_top: number;
    
  }


const useGames = (gameQuery: GameQuery) => {
  const platformIdToSearch = gameQuery.platform?.id;
  const platformNameToSearch = gameQuery.platform?.name;

// Log platform information for debugging
console.log("Selected Platform ID:", platformIdToSearch);
console.log("Selected Platform Name:", platformNameToSearch);

// Log sorting order for debugging
//console.log("Sorting Order:", gameQuery.sortOrder);

// Make the Api request
return useData<Game>('/games', {
      params: {
      genres: gameQuery.genre?.id,
      platforms: platformIdToSearch,
      ordering: gameQuery.sortOrder,
      search:  gameQuery.searchText
      },
    },
      [gameQuery]);

  };
    
export default useGames;
import useData from "./useData.ts";
import {GameQuery} from "../App.tsx";

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
    rating: number;
}

export default function useGames(gameQuery: GameQuery) {
    return useData<Game>('/games', {
        params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText
        }
    }, [gameQuery]);
}

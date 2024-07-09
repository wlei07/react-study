import {useEffect, useState} from "react";
import axiosInstance from '../services/api-client';
import {CanceledError} from "axios";

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

interface FetchGamesResponse {
    count: number;
    results: Game[];
}

export default function useGames() {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
        axiosInstance.get<FetchGamesResponse>('/games', {signal: controller.signal})
            .then(response => {
                setGames(response.data.results);
                //putting it to finally does not work, thus duplicate in then() and catch() methods.
                setLoading(false);
            })
            .catch(error => {
                if (error instanceof CanceledError) {
                    return;
                }
                setError(error.message);
                setLoading(false);
            });
        return () => controller.abort();
    }, []);
    return {games, error, isLoading};
}

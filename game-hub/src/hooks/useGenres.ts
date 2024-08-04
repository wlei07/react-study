import genres from '../data/genres';

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

export default function useGenres() {
    return ({data: genres, isLoading: false, error: null});
}

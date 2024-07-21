import useData from "./useData.ts";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

export default function useGenres() {
    return useData<Genre>('/genres');
}

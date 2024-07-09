import useGenres from "../hooks/useGenres.ts";

export default function GenreList() {
    const {genres} = useGenres();
    return (
        <ul>
            {genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
        </ul>
    );
}

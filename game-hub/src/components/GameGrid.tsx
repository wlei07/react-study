import {SimpleGrid, Text} from "@chakra-ui/react";
import useGames from "../hooks/useGames.ts";
import GameCard from "./GameCard.tsx";
import GameCardSkeleton from "./GameCardSkeleton.tsx";
import GameCardContainer from "./GameCardContainer.tsx";
import {Genre} from "../hooks/useGenres.ts";

interface Props {
    selectedGenre: Genre | null;
}

export default function GameGrid({selectedGenre}: Props) {
    const {data, error, isLoading} = useGames(selectedGenre);
    const skeletons = [1, 2, 3, 4, 5, 6];
    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 5}} spacing={3} padding='10px'>
                {isLoading && skeletons.map(skeleton =>
                    <GameCardContainer key={skeleton}>
                        <GameCardSkeleton/>
                    </GameCardContainer>
                )}
                {!isLoading && data.map(game => (
                    <GameCardContainer key={game.id}><GameCard game={game}/></GameCardContainer>
                ))}
            </SimpleGrid>
        </>
    );
}

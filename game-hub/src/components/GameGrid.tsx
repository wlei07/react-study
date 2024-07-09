import {SimpleGrid, Text} from "@chakra-ui/react";
import useGames from "../hooks/useGames.ts";
import GameCard from "./GameCard.tsx";
import GameCardSkeleton from "./GameCardSkeleton.tsx";
import GameCardContainer from "./GameCardContainer.tsx";

export default function GameGrid() {
    const {games, error, isLoading} = useGames();
    const skeletons = [1, 2, 3, 4, 5, 6];
    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 5}} spacing={10} padding='10px'>
                {isLoading && skeletons.map(skeleton =>
                    <GameCardContainer>
                        <GameCardSkeleton key={skeleton}/>
                    </GameCardContainer>
                )}
                {games.map(game => (
                    <GameCardContainer><GameCard game={game} key={game.id}/></GameCardContainer>
                ))}
            </SimpleGrid>
        </>
    );
}

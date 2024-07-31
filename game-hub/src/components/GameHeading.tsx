import {Heading} from "@chakra-ui/react";
import {GameQuery} from "../App.tsx";

interface Props {
    gameQuery: GameQuery;
}

export default function GameHeading({gameQuery}: Props) {
    // Games
    // Action Games
    // Xbox Games
    // Xbox Action Games
    console.log(gameQuery.platform);
    const heading = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`;
    return (
        <Heading as="h1" marginY={5} fontSize='5xl'>{heading}</Heading>
    )
}

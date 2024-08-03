import {Game} from "../hooks/useGames.ts";
import {Card, CardBody, Heading, HStack, Image} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList.tsx";
import CriticScore from "./CriticScore.tsx";
import getCroppedImageUrl from "../services/image-url.ts";
import Emoji from './Emoji.tsx';

interface Props {
    game: Game
}

export default function GameCard({game}: Props) {
    return (
        <Card>
            <Image src={getCroppedImageUrl(game.background_image)}></Image>
            <CardBody>
                <HStack justifyContent='space-between' marginBottom={3}>
                    {/* ugly mapping an object with an attribute called platform to the attribute called platform */}
                    <PlatformIconList platforms={game.parent_platforms.map(({platform}) => platform)}/>
                    <CriticScore score={game.metacritic}/>
                </HStack>
                <Heading fontSize="2xl">{game.name} <Emoji rating={game.rating_top}/></Heading>
            </CardBody>
        </Card>
    );
}

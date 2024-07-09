import {Grid, GridItem, Show} from "@chakra-ui/react";
import NavBar from "./components/NavBar.tsx";
import GameGrid from "./components/GameGrid.tsx";
import GenreList from "./components/GenreList.tsx";

function App() {
    return (
        <Grid templateAreas={{
            base: `"nav" "main"`,
            md: `"nav nav" "aside main"`, // 1024px
        }}>
            <GridItem area='nav'><NavBar/></GridItem>
            <Show above="md">
                <GridItem area='aside'>
                    <GenreList/>
                </GridItem>
            </Show>
            <GridItem area='main'><GameGrid/></GridItem>
        </Grid>
    );
}

export default App;

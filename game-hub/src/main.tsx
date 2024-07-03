import React from 'react'
import ReactDOM from 'react-dom/client'
import {ChakraProvider, ColorModeScript} from "@chakra-ui/react";
import App from './App.tsx'
import './index.css'
import theme from "./theme.ts";


const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement!).render(
    <React.StrictMode>
        {/*has to be wrapped by this chakra provider, see here: https://v2.chakra-ui.com/getting-started/vite-guide step 2*/}
        <ChakraProvider>
            {/* to fix a bug in Charkra ui, see https://github.com/chakra-ui/chakra-ui/discussions/5051 */}
            {localStorage.getItem('chakra-ui-color-mode')? <></>:<>{localStorage.setItem('chakra-ui-color-mode', 'dark')}</>}
            <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
            <App/>
        </ChakraProvider>
    </React.StrictMode>
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import {ChakraProvider} from "@chakra-ui/react";
import App from './App.tsx'
import './index.css'


const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement!).render(
    <React.StrictMode>
        {/*has to be wrapped by this chakra provider, see here: https://v2.chakra-ui.com/getting-started/vite-guide step 2*/}
        <ChakraProvider>
            <App/>
        </ChakraProvider>
    </React.StrictMode>,
)

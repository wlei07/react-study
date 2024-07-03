import {HStack, Switch, Text, useColorMode} from "@chakra-ui/react";

export default function ColorModeSwitch() {
    const {toggleColorMode, colorMode} = useColorMode();
    return (
        <HStack>
            <Switch colorScheme="green" isChecked={colorMode === 'dark'} onChange={toggleColorMode}>Dark Mode</Switch>
            <Text></Text>
        </HStack>
    );
}

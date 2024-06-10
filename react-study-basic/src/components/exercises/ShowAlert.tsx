import Alert from "../Alert.tsx";
import Button from "./Button/Button.tsx";
import {useState} from "react";

function ShowAlert() {
    const [alertVisible, setAlertVisible] = useState(false);
    return (
        <>
            {alertVisible && <Alert onClose={() => setAlertVisible(false)}>My Alert</Alert>}
            <Button
                onClick={() => {
                    setAlertVisible(true);
                }}
                color='primary'// color is optional, default to primary
            >
                My Button
            </Button>
        </>
    );
}

export default ShowAlert;

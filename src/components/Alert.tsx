import {ReactNode} from "react";
// usage example from parent component:
/*
    return (
        <div>
            <Alert>
                Hello <span>World</span>
            </Alert>
        </div>
    )
 */

interface AlertProps {
    // so that HTML elements could be passed
    children: ReactNode;
    onClose: () => void;
}

const Alert = ({children, onClose}: AlertProps) => {
    return (
        <div className='alert alert-primary alert-dismissible' role='alert'>
            {children}
            <button type="button" className="btn-close" data-dismiss="alert" aria-label="Close"
            onClick={onClose}>
            </button>
        </div>
    )
}

export default Alert;

import {useEffect, useRef} from "react";

/**
 * pure component should NOT modify state during render, effect is modify component after it is rendered.
 */
export default function EffectHook() {
    const ref = useRef<HTMLInputElement>(null);

    // focus input after render
    useEffect(() => {
        if(ref.current) ref.current.focus();
    });

    // rename title after render
    useEffect(() => {
        document.title = 'My App';
    });

    return (
        <div>
            <input ref={ref} type="text" className='form-control'>

            </input>
        </div>
    );
}

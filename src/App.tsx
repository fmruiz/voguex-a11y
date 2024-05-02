import React, { useRef } from 'react';
import useSpeakClickOutside from './hooks/useSpeakClickOutside';

const App = () => {
    const ref = useRef<HTMLButtonElement>(null);

    useSpeakClickOutside(ref);

    return (
        <>
            <button ref={ref} className="font-bold">
                Click outside!
            </button>
        </>
    );
};

export default App;

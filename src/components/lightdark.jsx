import { useState, useEffect } from 'react';
import dark from '../assets/darkmode.svg';
import light from '../assets/lightmode.svg';

function Lightdark() {
    const [isDark, setIsDark] = useState(false);

    // Apply the class to <body> on toggle
    useEffect(() => {
        document.body.className = isDark ? 'dark-mode' : 'light-mode';
    }, [isDark]);

    return (
        <button className="togglebtn" id="lightdark" onClick={() => setIsDark(!isDark)}>
            <img
                className="svg-icon"
                id="modeIcon"
                src={isDark ? dark : light}
                width="24"
                height="24"
                alt={isDark ? 'Light Mode' : 'Dark Mode'}
            />
        </button>
    );
}

export default Lightdark;

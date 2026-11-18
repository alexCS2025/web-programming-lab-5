import React, { useState, useEffect } from "react";

function Footer() {
    const [osInfo, setOsInfo] = useState("");

    useEffect(() => {
        const userAgent = navigator.userAgent;
        
        localStorage.setItem("os", userAgent);

        setOsInfo(userAgent);
    }, []);

    return (
        <footer>
            <p id="osInfo">{osInfo}</p>
        </footer>
    );
}

export default Footer;
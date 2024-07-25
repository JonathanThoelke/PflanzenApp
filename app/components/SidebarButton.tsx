'use client';
//
import React, { useEffect, useRef, useState } from "react";


const SidebarButton: React.FC = () => {
    const [isFoldedOut, setFoldedOut] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const handleButtonClick = () => {
        console.log("Menü geklickt")
        setFoldedOut(!isFoldedOut);
        var targetElement = document.getElementById('sidebar');
        if(targetElement != null){
            if (targetElement.classList.contains('-left-96')) {
                targetElement.classList.remove('-left-96');
                targetElement.classList.add('left-0');
            } else {
                targetElement.classList.remove('left-0');
                targetElement.classList.add('-left-96');
            }
        }
    };

    const handleClickOutside = (event: MouseEvent) => {
        const sidebarElement = document.getElementById('sidebar');
        if (sidebarElement && !sidebarElement.contains(event.target as Node) && !buttonRef.current?.contains(event.target as Node)) {
            setFoldedOut(false);
            sidebarElement.classList.remove('left-0');
            sidebarElement.classList.add('-left-96');
        }
    };

    useEffect(() => {
        if (isFoldedOut) {
            document.addEventListener('click', handleClickOutside);
        } else {
            document.removeEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isFoldedOut]);

    return (
        <button
            id="changeStyleButton"
            onClick={handleButtonClick}
            ref={buttonRef}
        >
            <img src="menu.jpeg" className="h-12 w-8"></img>
        </button>
    );
};

export default SidebarButton;
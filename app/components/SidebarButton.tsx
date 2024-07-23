'use client';
//
import React, { useState } from "react";


const SidebarButton: React.FC = () => {

    const [isFoldedOut, foldOut] = useState(true);

    const handleButtonClick = () => {
        console.log("Hello World!")
        foldOut(!isFoldedOut);
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

    return (
        <button
            id="changeStyleButton"
            onClick={handleButtonClick}
        >
            <img src="menu.jpeg" className="h-12 w-8"></img>
        </button>
    );
};

export default SidebarButton;
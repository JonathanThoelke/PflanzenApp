import React, { useState } from 'react';
import { useRouter } from 'next/router'; // Assuming you're using Next.js for routing
import Frage1 from './Frage1';
import Frage2 from './Frage2';
import Frage3 from './Frage3';
import Frage4 from './Frage4';
import Frage5 from './Frage5';
import Button from './Button';

const Page = () => {
    const router = useRouter();
    const [inputValue, setInputValue] = useState(''); // Beispiel zur Verwaltung von inputValue
    const handleClick = () => {
        alert('Button clicked!');
        router.push(`/Pflanzen?name=${inputValue}`); // Navigiere zur neuen URL
    };

    // Angenommene `searchParams` werden aus den Router-Query-Parametern abgerufen
    const { query } = router;
    const exclusive = !!query.exc || false;
    const nameDE = query.name;
    const nameLT = query.nameL;
    const desc = query.desc;
    const category = query.cat;
    const height = query.h;
    const light = query.light;
    const pet = query.pet;
    const bloom = query.bloom;

    return (
        <div className="p-4">
            <Frage1 />
            <Frage2 />
            <Frage3 />
            <Frage4 />
            <Frage5 />
            <Button label="Click Me" onClick={handleClick} />
        </div>
    );
}

export default Page;

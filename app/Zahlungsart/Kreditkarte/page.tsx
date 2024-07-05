import React from 'react';
import Rechnung from './page.tsx';
import Sofortzahlung from './page.tsx';


const Page = () => {
    return (
        <div>
            <b>Ausgewählte Zahlungsart</b>
            <Rechnung/>
        </div>
    );
};

export default Page;

import Rechnung from './page.tsx';
import Gutschein from './page.tsx';
import Kreditkarte from './page.tsx';
import Sofortzahlung from './page.tsx';

const page = () => {
    return (
        <div><b>Ausgewählte Zahlungsart</b> 
        <Rechnung/> 
        <Gutschein/>
        <Kreditkarte/>
        <Sofortzahlung/>
        </div>
    )
}

export default page;
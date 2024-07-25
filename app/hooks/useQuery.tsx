// Custom hook, damit die Seiten sich immer aktualisieren wenn dich die Query ändert

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function useQuery() {
    const { query } = useRouter();
    const [queryString, setQueryString] = useState(query);

    useEffect(function() {
        setQueryString(query);
    }, [query]);

    return queryString;
}

export default useQuery;
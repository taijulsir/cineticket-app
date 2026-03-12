import { useEffect } from 'react';

function useScrollToHash(event: any, hashTarget = "#bookSeats") {
    useEffect(() => {
        const hash = window.location.hash;

        if (event && hash && hash === hashTarget) {
            const element = document.getElementById(hashTarget.slice(1));
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [event, hashTarget]);
};

export default useScrollToHash;

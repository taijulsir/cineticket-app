import { useEffect, useState } from 'react';

function useElementDimensions(ref) {
    const [dimensions, setDimensions] = useState({});

    useEffect(() => {
        const updateDimensions = () => {
            if (ref.current) {
                const rect = ref.current.getBoundingClientRect();
                const x = rect.left + window.scrollX;
                const y = rect.top + window.scrollY;
                setDimensions({
                    width: ref.current.clientWidth,
                    height: ref.current.clientHeight,
                    x,
                    y,
                });
            }
        };

        updateDimensions();

        window.addEventListener('resize', updateDimensions);

        return () => {
            window.removeEventListener('resize', updateDimensions);
        };
    }, [ref]);

    return dimensions;
}

export default useElementDimensions;

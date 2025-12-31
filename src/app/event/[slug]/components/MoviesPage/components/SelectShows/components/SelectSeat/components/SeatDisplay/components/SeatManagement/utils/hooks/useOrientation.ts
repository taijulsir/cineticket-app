import { useState, useEffect, useRef } from 'react';

const useOrientation = (ref) => {
    const [orientation, setOrientation] = useState('landscape');

    useEffect(() => {
        const observer = new ResizeObserver((entries) => {
            for (let entry of entries) {
                if (entry.contentRect.height > entry.contentRect.width) {
                    setOrientation('portrait');
                } else {
                    setOrientation('landscape');
                }
            }
        });

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref]);

    return orientation;
};

export default useOrientation;


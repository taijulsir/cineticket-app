

import React from 'react';
import { FaChair, FaCrown, FaChild, FaWheelchair, FaBan } from 'react-icons/fa';
import { PiStairsThin } from 'react-icons/pi';

function Icon({ status, size }: { status?: string; size?: number }) {
    switch (status) {
        case 'recliner':
        case 'standard':
            return <FaChair color="black" size={size} />;
        case 'premium':
            return <FaCrown color="black" size={size} />;
        case 'kids':
            return <FaChild color="black" size={size} />;
        case 'wheelchair':
            return <FaWheelchair color="black" size={size} />;
        case 'stair':
            return <PiStairsThin color="gray" size={size} />;
        case 'unavailable':
            return <FaBan color="black" size={size} />;
        default:
            return null;
    }
}

export default Icon;

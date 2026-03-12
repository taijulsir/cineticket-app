
import React from "react";

function SeatWrapper({ children, singleDivRef }: { children?: React.ReactNode; singleDivRef?: any }) {
    return (
        <div
            className="bg-white seat-act-area flex items-center justify-center w-full h-full border border-black rounded-[2px] overflow-hidden"

            ref={singleDivRef}

        >
            {children}
        </div>
    );
}

export default SeatWrapper;

import React from "react";

function SeatManageMentLayout({ children, divRef }: { children?: React.ReactNode; divRef?: any }) {
    return (
        <div className=" h-full w-full grid overflow-hidden  place-items-center" ref={divRef}>
            {children}
        </div>
    );
}

export default SeatManageMentLayout;
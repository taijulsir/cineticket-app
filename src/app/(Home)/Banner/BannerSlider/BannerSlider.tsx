import React from "react";

function BannerSlider({ children }: { children: React.ReactNode }) {
    return (
        <div className="absolute w-full bottom-0 px-7 pt-5 pb-10 lg:py-5 md:left-0 md:px-24 md:py-14">
            <div className="flex gap-2 md:gap-5 justify-start items-center">
                {children}
            </div>
        </div>
    )
}

export default BannerSlider
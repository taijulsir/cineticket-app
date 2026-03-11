import React from 'react'

function BannerContent({ slider }) {
    return (
        <div >
            <h1 style={{
                // webkitTextStrokeWidth: "1px",
                // webkitTextStrokeColor: "black"
                lineHeight: "inherit"
            }}>{slider?.event.name}</h1>
            {/* <div className="flex justify-start items-center gap-3 md:gap-7 pt-0 md:pt-2 pb-2 md:pb-6">
                <h5 style={{
                    webkitTextStrokeWidth: "1px",
                    webkitTextStrokeColor: "black"
                }}>{slider?.event.type}</h5>
                <h5 style={{
                    webkitTextStrokeWidth: "1px",
                    webkitTextStrokeColor: "black"
                }}>{new Date(slider?.event.releaseDate).toLocaleDateString()}</h5>
                <h5 style={{
                    webkitTextStrokeWidth: "1px",
                    webkitTextStrokeColor: "black"
                }}>{slider?.event.duration}</h5>
            </div> */}
        </div>
    )
}

export default BannerContent
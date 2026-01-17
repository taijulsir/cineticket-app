

function SeatManageMentLayout({ children ,divRef }) {
    return (
        <div className=' h-full w-full grid overflow-hidden  place-items-center'
            ref={divRef}>
            {children}
        </div>
    )
}

export default SeatManageMentLayout
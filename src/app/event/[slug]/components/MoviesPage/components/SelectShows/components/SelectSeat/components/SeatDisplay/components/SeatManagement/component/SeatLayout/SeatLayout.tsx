

function SeatLayout({ children, rows, columns }) {
    return (
        <div
            className="grid gap-0.5 h-full w-full overflow-hidden"
            style={{
                gridTemplateRows: `repeat(${rows}, 1fr)`,
                gridTemplateColumns: `repeat(${columns}, 1fr)`,
            }}
        >
            {children}

        </div>

    )
}

export default SeatLayout
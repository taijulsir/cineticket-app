
function Tooltip({ tooltipContent, dimensions }: { tooltipContent?: React.ReactNode; dimensions?: { height?: number } }) {
    return (
        <div
            className="tool-tip-text fixed w-max text-white bg-black rounded p-1 z-50"
            style={{
                marginBottom: `${dimensions?.height ?? 0}px`,
            }}
        >
            {tooltipContent}
        </div>
    );
}

export default Tooltip;


function Tooltip({ tooltipContent, dimensions }) {
    return (
        <div
            className="tool-tip-text fixed w-max text-white bg-black rounded p-1 z-50"
            style={{
                marginBottom: `${dimensions.height}px`,
            }}
        >
            {tooltipContent}
        </div>
    );
}

export default Tooltip;

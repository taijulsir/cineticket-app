function Pill({ text, selected, handleClick }) {
	return (
		<div className="min-w-[140px]   border-[0px] border-white rounded-lg flex justify-start items-center overflow-x-auto gap-5">
			<label
				onClick={handleClick}
				className={`relative flex items-center cursor-pointer overflow-hidden ${
					selected
						? '  text-white rounded-lg  border-[1px] border-gray-400 hover:text-white hover:border-white'
						: 'text-white  border-[1px] border-gray-600 hover:border-gray-400'
				} w-full px-2 lg:px-5 py-2 rounded-lg`}
			>
				<input
					className="sr-only peer"
					name={`futuristic-radio-${text}`}
					type="radio"
					checked={selected}
				/>
				<div className="w-3 h-3 bg-transparent border-2 border-white rounded-full peer-checked:bg-white peer-checked:border-white peer-hover:shadow-lg peer-hover:shadow-white peer-checked:shadow-lg peer-checked:shadow-white transition duration-300 ease-in-out shrink-0"></div>
				<span className="ml-2 text-sm md:text-base no-underline whitespace-nowrap">
					{text}
				</span>
			</label>
		</div>
	);
}

export default Pill;

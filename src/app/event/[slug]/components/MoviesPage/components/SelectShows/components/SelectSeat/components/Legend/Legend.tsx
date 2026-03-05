function Legend() {
	return (
		<div className="flex items-center gap-4 justify-center md:justify-start overflow-hidden self-center">
			<p className="flex justify-start lg:justify-center items-center gap-2">
				{' '}
				<div className="bg-[#ffffff] border-none h-3 w-3 rounded-sm" />
				Available
			</p>
			<p className="flex justify-start lg:justify-center items-center gap-2">
				{' '}
				<div className="bg-[#F5EE11] border-none h-3 w-3 rounded-sm" />
				Selected
			</p>
			<p className="flex justify-start lg:justify-center items-center gap-2">
				{' '}
				<div className="bg-black border-none h-3 w-3 rounded-sm outline" />
				Booked
			</p>
		</div>
	);
}

export default Legend;

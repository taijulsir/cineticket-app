function Heading({ heading, extraClass = '' }: { heading?: any; extraClass?: string }) {
	return (
		<h2 className={`w-full max-auto ${extraClass}`}>
			{heading}
		</h2>
	);
}

export default Heading;

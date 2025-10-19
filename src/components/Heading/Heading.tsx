function Heading({ heading, extraClass = '' }) {
	return (
		<h2 className={`w-full max-auto ${extraClass}`}>
			{heading}
		</h2>
	);
}

export default Heading;

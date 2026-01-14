import useFetchShowSeatsAndPrice from './utils/hooks/useFetchShowSeatAndPrice';
import { TheaterAndShowSelection } from './components/TheaterAndShowSelection/TheaterAndShowSelection';
import { SeatDisplay } from './components/SeatDisplay/SeatDisplay';
import { TotalPriceDisplay } from './components/TotalPriceDisplay/TotalPriceDisplay';
import Screen from './components/Screen/Screen';
import Legend from './components/Legend/Legend';
import './SelectSeat.css';
import { useEffect } from 'react';

function SelectSeat({
	selectedShows,
	handleCustomerOrder,
	handleGuestOrder,
	setSelectedShows,
	shows,
	theaters,
	selectedTheater,
	setSelectedTheater,
	toggleFetch,
	error,
	showModal,
	currencySymbol
}) {

	const { numberOfRows, numberOfColumns, seats, setSeats, showsPrice } = useFetchShowSeatsAndPrice(selectedShows, toggleFetch);

	useEffect(() => {
		setSeats([])
	}, [showModal])

	return (
		<div
			style={{
				display: 'grid',
				gridTemplateRows: `6% 4% 3% 74% 4% 4%`,
				translate: '0px 0px',
			}}
			className="gap-[1%]"
		>
			<TheaterAndShowSelection
				theaters={theaters}
				selectedTheater={selectedTheater}
				setSelectedTheater={setSelectedTheater}
				shows={shows}
				setSelectedShows={setSelectedShows}
				selectedShows={selectedShows}
				setSeats={setSeats}
			/>

			{selectedShows && (
				<>
					<Screen />
					<div></div>
					<SeatDisplay
						numberOfRows={numberOfRows}
						numberOfColumns={numberOfColumns}
						seats={seats}
						showsPrice={showsPrice}
						handleCustomerOrder={handleCustomerOrder}
						handleGuestOrder={handleGuestOrder}
						currencySymbol = {currencySymbol}
					/>
					<TotalPriceDisplay error={error} currencySymbol = {currencySymbol}/>
					<Legend />
				</>
			)}
		</div>
	);
}

export default SelectSeat;


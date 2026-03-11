import { useContext, useRef } from 'react';

import AppContext from '@/context/AppContext';
import useSeatManagement from './utils/hooks/useSeatManageFunctions';
import useOrientation from './utils/hooks/useOrientation';
import Seat from './component/Seat/Seat';
import './SeatManagement.css';
import SeatManageMentLayout from './component/SeatManagementLayout/SeatManageMentLayout';
import SeatLayout from './component/SeatLayout/SeatLayout';

function SeatManagement({ rows, columns, seats, showsPrice ,currencySymbol }) {

	const { selectedSeats } = useContext(AppContext)
	const { updatedSeats, handleSeatClickWrapper, getTooltipContent } = useSeatManagement(seats, showsPrice, currencySymbol);

	const divRef = useRef();
	const orientation = useOrientation(divRef);


	return (
		<SeatManageMentLayout divRef={divRef}>

			{updatedSeats?.length > 0 && (
				<SeatLayout rows={rows} columns={columns}>
					{updatedSeats?.map((seat) => (
						<Seat
							key={seat._id}
							seat={seat}
							handleSeatClickWrapper={handleSeatClickWrapper}
							getTooltipContent={getTooltipContent}
							isSelected={selectedSeats.some(
								(selectedSeat) =>
									selectedSeat.seatName === seat.seatName
							)}
							orientation={orientation}
						/>
					))}
				</SeatLayout>
			)}
		</SeatManageMentLayout>
	);
}

export default SeatManagement;

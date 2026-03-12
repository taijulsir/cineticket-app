import { useContext, useRef } from 'react';

import AppContext from '@/context/AppContext';
import useSeatManagement from './utils/hooks/useSeatManageFunctions';
import useOrientation from './utils/hooks/useOrientation';
import Seat from './component/Seat/Seat';
import './SeatManagement.css';
import SeatManageMentLayout from './component/SeatManagementLayout/SeatManageMentLayout';
import SeatLayout from './component/SeatLayout/SeatLayout';

function SeatManagement({ rows, columns, seats, showsPrice, currencySymbol }: { rows: number; columns: number; seats?: any[]; showsPrice?: any; currencySymbol?: string }) {

	const { selectedSeats } = useContext(AppContext) as any;
	const { updatedSeats, handleSeatClickWrapper, getTooltipContent } = useSeatManagement(seats, showsPrice, currencySymbol);

	const divRef = useRef<any>(null);
	const orientation = useOrientation(divRef as any);


	return (
		<SeatManageMentLayout divRef={divRef}>

					{updatedSeats && updatedSeats.length > 0 && (
					<SeatLayout rows={rows} columns={columns}>
						{updatedSeats.map((seat: any) => (
							<Seat
							key={seat._id}
							seat={seat}
							handleSeatClickWrapper={handleSeatClickWrapper}
							getTooltipContent={getTooltipContent}
								isSelected={selectedSeats.some((selectedSeat: any) => selectedSeat.seatName === seat.seatName)}
								orientation={orientation}
							/>
					))}
				</SeatLayout>
			)}
		</SeatManageMentLayout>
	);
}

export default SeatManagement;

import { useRef } from 'react';
import { FaRegBookmark } from 'react-icons/fa';
import useElementDimensions from './utils/hooks/useElementDimensions';

import Tooltip from './components/Tooltip/ToolTip';
import Icon from './components/Icon/Icon';
import SeatWrapper from './components/SeatWrapper/SeatWrapper';
import './SeatDesign.css';

function Seat({
	seat,
	handleSeatClickWrapper,
	getTooltipContent,
	isSelected,
	orientation,
}: {
	seat?: any;
	handleSeatClickWrapper?: (seat: any) => void;
	getTooltipContent?: (seat: any) => React.ReactNode;
	isSelected?: boolean;
	orientation?: string;
}) {

	const singleDivRef = useRef<HTMLDivElement | null>(null);
	const dimensions: any = useElementDimensions(singleDivRef);
	const size = dimensions?.width && dimensions?.height ? (dimensions.width > dimensions.height ? dimensions.height : dimensions.width) - 2 : 14;
	const tooltipContent = seat ? getTooltipContent?.(seat) : '';

	
	return (
		<SeatWrapper singleDivRef={singleDivRef}
		>
			<button
				disabled={seat?.status === 'stair' || seat?.status === 'unavailable' || seat?.isBooked || seat?.isTemporaryBooked}
				type="button"
				className={`square-button 
					${isSelected ? 'selected' : ''} 
					${seat?.status === 'unavailable' || seat?.status === 'stair' || (seat?.isBooked || seat?.isTemporaryBooked) ? 'booked' : ''}`}
				onClick={() => handleSeatClickWrapper?.(seat)}
				data-tooltip={seat ? getTooltipContent?.(seat) : ''}
				style={{
					display: 'grid',
					placeItems: 'center',
				}}
			>

				<Tooltip tooltipContent={tooltipContent} dimensions={dimensions} />

				{!seat?.isBooked && !seat?.isTemporaryBooked && <Icon status={seat?.status} size={size} />}
				{seat && (seat?.isBooked || seat?.isTemporaryBooked) && (
					<FaRegBookmark
						color="gray"
						size={size}
					/>
				)}
			</button>
		</SeatWrapper>
	);
}

export default Seat;




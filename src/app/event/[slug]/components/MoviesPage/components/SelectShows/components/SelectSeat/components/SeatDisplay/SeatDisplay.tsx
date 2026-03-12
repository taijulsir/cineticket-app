import SeatManagement from "./components/SeatManagement/SeatManagement";

export function SeatDisplay({ numberOfRows, numberOfColumns, seats, showsPrice, handleCustomerOrder, handleGuestOrder, currencySymbol }: { numberOfRows: number; numberOfColumns: number; seats?: any[]; showsPrice?: any; handleCustomerOrder?: any; handleGuestOrder?: any; currencySymbol?: string }) {
	return seats && seats.length > 0 ? (
		<SeatManagement
			rows={numberOfRows}
			columns={numberOfColumns}
			seats={seats}
			showsPrice={showsPrice}
			currencySymbol = {currencySymbol}
		/>
	) : (
		<div></div>
	);
}
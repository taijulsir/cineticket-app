import SeatManagement from "./components/SeatManagement/SeatManagement";

export function SeatDisplay({ numberOfRows, numberOfColumns, seats, showsPrice, handleCustomerOrder, handleGuestOrder, currencySymbol }) {
	return seats?.length > 0 ? (
		<SeatManagement
			rows={numberOfRows}
			columns={numberOfColumns}
			seats={seats}
			showsPrice={showsPrice}
			handleCustomerOrder={handleCustomerOrder}
			handleGuestOrder={handleGuestOrder}
			currencySymbol = {currencySymbol}
		/>
	) : (
		<div></div>
	);
}
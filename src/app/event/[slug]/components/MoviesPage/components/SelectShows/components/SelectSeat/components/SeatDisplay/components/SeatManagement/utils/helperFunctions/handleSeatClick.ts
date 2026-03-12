export function handleSeatClick(seat: any, setSelectedSeats: any): void {
    setSelectedSeats((prevSelectedSeats: any[]) => {
        const isSelected = prevSelectedSeats.some(
            (selectedSeat) => selectedSeat.seatName === seat.seatName
        );
        if (isSelected) {
            return prevSelectedSeats.filter(
                (selectedSeat) => selectedSeat.seatName !== seat.seatName
            );
        } else {
            return [...prevSelectedSeats, seat];
        }
    });
}
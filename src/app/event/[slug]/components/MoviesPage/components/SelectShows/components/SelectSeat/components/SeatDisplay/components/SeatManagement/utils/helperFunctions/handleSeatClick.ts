export function handleSeatClick (seat,setSelectedSeats)  {
    setSelectedSeats((prevSelectedSeats) => {
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
};
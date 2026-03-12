import SelectTheater from "./SelectTheater/SelectTheater";
import ShowSelector from "./ShowSelector/ShowSelector";


export function TheaterAndShowSelection({ theaters, selectedTheater, setSelectedTheater, shows, setSelectedShows, selectedShows, setSeats }: { theaters?: any[]; selectedTheater?: string; setSelectedTheater?: (v: string) => void; shows?: any[]; setSelectedShows?: (v: string) => void; selectedShows?: string; setSeats?: any }) {
	return (
		<div className="theater_show overflow-hidden gap-[2%] sm:gap-[10%]">
			<SelectTheater
				theaters={theaters}
				selectedTheater={selectedTheater}
				setSelectedTheater={setSelectedTheater}
				setSeats={setSeats}
			/>
			<ShowSelector
				shows={shows}
				setSelectedShows={setSelectedShows}
				selectedShows={selectedShows}
			/>
		</div>
	);
}

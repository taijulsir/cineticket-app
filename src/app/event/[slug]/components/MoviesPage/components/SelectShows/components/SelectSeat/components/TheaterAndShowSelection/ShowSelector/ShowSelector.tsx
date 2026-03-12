function ShowSelector({ shows, selectedShows, setSelectedShows }: { shows?: any[]; selectedShows?: string; setSelectedShows?: (v: string) => void }) {

  function convertTo12Hour(time: string) {
    let [hour, minute] = time.split(":").map(Number);
    let period = hour >= 12 ? "PM" : "AM";
    hour = hour % 12 || 12;
    return `${hour}:${minute < 10 ? "0" + minute : minute} ${period}`;
  }
  return (
    <div className=" grid-flow-row lg:grid-flow-col justify-center items-center  lg:gap-5 ">
      <div>
        <select
          value={selectedShows}
          onChange={(e) => setSelectedShows?.(e.target.value)}
          style={{
            borderRadius: "5px",
            color: "white",
            background: "#212529",
            border: "1px solid gray",
            padding: "10px",
            width: "100%",
          }}
        >
          <option value="">Select Shows</option>
          {shows &&
            shows.length > 0 &&
            shows?.map((show) => (
              <option key={show._id} value={show?._id}>
                {`${show?.hall?.name} - ${new Date(
                  show?.date
                ).toDateString()}, ${convertTo12Hour(show?.startTime)}`}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
}

export default ShowSelector;

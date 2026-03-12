

function SelectTheater({
    theaters,
    selectedTheater,
    setSelectedTheater,
    setSeats
}: { theaters?: any[]; selectedTheater?: string; setSelectedTheater?: (v: string) => void; setSeats?: any }) {


    return (
        <div className=" grid-flow-row lg:grid-flow-col justify-center items-center  lg:gap-5 ">
            {/* <div>
          <p className="text-center">{shows?.length} shows available</p>
        </div> */}
            <div>
                <select
                    value={selectedTheater}
                    onChange={(e) => {
                        setSelectedTheater?.(e.target.value)
                        setSeats?.([])
                    }}
                    style={{
                        borderRadius: "5px",
                        color: "white",
                        background: "#212529",
                        border: "1px solid gray",
                        padding: "10px",
                        width: "100%",
                    }}
                >
                    <option value="">Select Theater</option>
                    {theaters &&
                        theaters.length > 0 &&
                        theaters?.map((theater) => (
                            <option key={theater._id} value={theater?._id}>
                               {theater.name}
                            </option>
                        ))}
                </select>
            </div>
        </div>
    )
}

export default SelectTheater

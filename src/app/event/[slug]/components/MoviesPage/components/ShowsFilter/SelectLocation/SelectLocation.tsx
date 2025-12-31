import Pill from "@/components/elements/Pill";
import useGetLocations from "./useGetLocations";

function SelectLocation({
  headerText,
  selectedLocation,
  setSelectedLocation,
  api,
}) {
  const { locations } = useGetLocations(api);

  return (
    <>
      <p>{headerText}</p>
      <div className="grid  grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 justify-start items-center gap-3 mt-2 mb-4">
        {locations?.map((location, index) => (
          <Pill
            key={location?._id}
            text={location.name}
            selected={location._id === selectedLocation?._id}
            handleClick={() => setSelectedLocation(location)}
          />
        ))}
      </div>
    </>
  );
}

export default SelectLocation;

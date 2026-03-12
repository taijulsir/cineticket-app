import Pill from "@/components/elements/Pill";
import useGetLocations from "./useGetLocations";

function SelectLocation({
  headerText,
  selectedLocation,
  setSelectedLocation,
  api,
}: { headerText?: any; selectedLocation?: any; setSelectedLocation?: any; api?: any }) {
  const { locations } = useGetLocations(api) as any;

  return (
    <>
      <p>{headerText}</p>
      <div className="grid  grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 justify-start items-center gap-3 mt-2 mb-4">
        {locations?.map((location: any, index: number) => (
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

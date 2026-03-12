import SelectCity from "./SelectLocation/SelectCity/SelectCity";
import SelectCountry from "./SelectLocation/SelectCountry/SelectCountry";
import SelectState from "./SelectLocation/SelectState/SelectState";
import SelectTheater from "./SelectLocation/SelectTheater/SelectTheater";

function ShowsFilter({
  eventId,
  countries,
  selectedCountry,
  setSelectedCountry,
  states,
  selectedState,
  setSelectedState,
  cities,
  selectedCity,
  setSelectedCity,

}: any) {
  return (
    <>
      {countries?.length > 0 && (
        <SelectCountry
          headerText="Select Country"
          countries={countries}
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
          api={`events/getAllCountryForEventShows?event=${eventId}`}
        />
      )}
      {states?.length > 0 && (
        <SelectState
          headerText="Select State"
          states={states}
          selectedState={selectedState}
          setSelectedState={setSelectedState}
          api={`events/getAllShowsByCountryAndState?country=${selectedCountry?._id}&event=${eventId}`}
        />
      )}
      {cities?.length > 0 && (
        <SelectCity
          headerText="Select City"
          cities={cities}
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
          api={`events/getAllShowsByCityAndState?state=${selectedState?._id}&event=${eventId}`}
        />
      )}
      {/* {theaters?.length > 0 && (
        <SelectTheater
          headerText="Select Theater"
          theaters={theaters}
          selectedTheater={selectedTheater}
          setSelectedTheater={setSelectedTheater}
          api={`events/getAllShowsByTheaterAndState?city=${selectedCity?._id}&event=${eventId}`}
        />
      )} */}
    </>
  );
}

export default ShowsFilter;

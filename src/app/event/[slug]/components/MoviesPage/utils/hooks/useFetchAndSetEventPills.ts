import useFetchData from "./useFetchData";

function useFetchAndSetEventPills({eventId, selectedCountry, selectedState, selectedCity, selectedTheater}) {
    const { data: countries, error: countriesError } = useFetchData(
        eventId ? `events/getAllCountryForEventShows?event=${eventId}` : null,
        [eventId]
    );

    const { data: states, error: statesError } = useFetchData(
        selectedCountry?._id ? `events/getAllShowsByCountryAndState?country=${selectedCountry._id}&event=${eventId}` : null,
        [selectedCountry]
    );

    const { data: cities, error: citiesError } = useFetchData(
        selectedState?._id ? `events/getAllShowsByCityAndState?state=${selectedState._id}&event=${eventId}` : null,
        [selectedState]
    );

    const { data: theaters, error: theatersError } = useFetchData(
        selectedCity?._id ? `events/getAllShowsByTheaterAndState?city=${selectedCity._id}&event=${eventId}` : null,
        [selectedCity]
    );

    const { data: shows, error: showsError } = useFetchData(
        selectedTheater ? `events/getAllShowsByTheaterAndEvent?theater=${selectedTheater}&event=${eventId}` : null,
        [selectedTheater]
    );

    return { countries, states, cities, theaters, shows, errors: { countriesError, statesError, citiesError, theatersError, showsError } };
}

export default useFetchAndSetEventPills;

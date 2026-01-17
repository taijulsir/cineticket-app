import { useEffect } from 'react'
import SelectLocation from '../SelectLocation';

function SelectCountry({ headerText,countries, selectedCountry, setSelectedCountry, api }) {

    useEffect(() => {
        const isAustraliaExist = countries?.find(
            (country) => country.name.toLowerCase() === "australia"
        );
        if (isAustraliaExist) {
            setSelectedCountry(isAustraliaExist);
        } else {
            setSelectedCountry(countries[0]);
        }
    }, [countries]);

    return (
        <SelectLocation
            headerText={headerText}
            options={countries}
            selectedLocation={selectedCountry}
            setSelectedLocation={setSelectedCountry}
            api={api}
        />
    )
}

export default SelectCountry

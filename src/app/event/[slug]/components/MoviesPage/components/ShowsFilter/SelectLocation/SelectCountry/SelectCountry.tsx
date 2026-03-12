import { useEffect } from 'react'
import SelectLocation from '../SelectLocation';

function SelectCountry({ headerText,countries, selectedCountry, setSelectedCountry, api }: { headerText?: any, countries?: any[], selectedCountry?: any, setSelectedCountry?: any, api?: any }) {

    useEffect(() => {
        if (!countries || countries.length === 0) return;
        const isAustraliaExist = countries?.find(
            (country: any) => (country?.name || '').toLowerCase() === "australia"
        );
        if (isAustraliaExist) {
            setSelectedCountry?.(isAustraliaExist);
        } else {
            setSelectedCountry?.(countries[0]);
        }
    }, [countries]);

    return (
        <SelectLocation
            headerText={headerText}
            selectedLocation={selectedCountry}
            setSelectedLocation={setSelectedCountry}
            api={api}
        />
    )
}

export default SelectCountry

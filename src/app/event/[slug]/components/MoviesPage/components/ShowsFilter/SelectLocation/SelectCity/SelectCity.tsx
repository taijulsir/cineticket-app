import { useEffect } from 'react'
import SelectLocation from '../SelectLocation';

function SelectCity({ headerText, cities, selectedCity, setSelectedCity, api }: { headerText?: any, cities?: any[], selectedCity?: any, setSelectedCity?: any, api?: any }) {

    useEffect(() => {
        if (cities && cities.length > 0) {
            setSelectedCity?.(cities[0]);
        }
    }, [cities]);

    return (
        <SelectLocation
            headerText={headerText}
            selectedLocation={selectedCity}
            setSelectedLocation={setSelectedCity}
            api={api}
        />
    )
}

export default SelectCity

import { useEffect } from 'react'
import SelectLocation from '../SelectLocation';

function SelectCity({ headerText, cities, selectedCity, setSelectedCity, api }) {

    useEffect(() => {
        setSelectedCity(cities[0]);
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

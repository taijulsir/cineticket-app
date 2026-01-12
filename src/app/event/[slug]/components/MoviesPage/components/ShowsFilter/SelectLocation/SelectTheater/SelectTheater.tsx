import { useEffect } from 'react'
import SelectLocation from '../SelectLocation';

function SelectTheater({ headerText, theaters, selectedTheater, setSelectedTheater, api }) {

    useEffect(() => {
        setSelectedTheater();
    }, [theaters]);

    return (
        <SelectLocation
            headerText={headerText}
            selectedLocation={selectedTheater}
            setSelectedLocation={setSelectedTheater}
            api={api}
        />
    )
}

export default SelectTheater

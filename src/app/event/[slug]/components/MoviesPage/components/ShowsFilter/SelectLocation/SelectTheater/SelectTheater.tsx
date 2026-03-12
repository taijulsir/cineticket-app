import { useEffect } from 'react'
import SelectLocation from '../SelectLocation';

function SelectTheater({ headerText, theaters, selectedTheater, setSelectedTheater, api }: { headerText?: any, theaters?: any[], selectedTheater?: any, setSelectedTheater?: any, api?: any }) {

    useEffect(() => {
        // guard and set first theater if available
        if (theaters && theaters.length > 0) {
            setSelectedTheater?.(theaters[0]);
        }
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

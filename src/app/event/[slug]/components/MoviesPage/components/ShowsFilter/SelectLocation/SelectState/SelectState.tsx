import { useEffect } from 'react'
import SelectLocation from '../SelectLocation';

function SelectState({ headerText,states, selectedState, setSelectedState, api }) {
    useEffect(() => {
        const isNSWExist = states?.find((state) => state.name.toLowerCase() === "nsw")
        if (isNSWExist) {
            setSelectedState(isNSWExist);
        } else {
            setSelectedState(states[0]);
        }
    }, [states]);

    return (
        <SelectLocation
            headerText={headerText}
            selectedLocation={selectedState}
            setSelectedLocation={setSelectedState}
            api={api}
        />
    )
}

export default SelectState

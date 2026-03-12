import { useEffect } from 'react'
import SelectLocation from '../SelectLocation';

function SelectState({ headerText,states, selectedState, setSelectedState, api }: { headerText?: any, states?: any[], selectedState?: any, setSelectedState?: any, api?: any }) {
    useEffect(() => {
        if (!states || states.length === 0) return;
        const isNSWExist = states?.find((state: any) => (state?.name || '').toLowerCase() === "nsw")
        if (isNSWExist) {
            setSelectedState?.(isNSWExist);
        } else {
            setSelectedState?.(states[0]);
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

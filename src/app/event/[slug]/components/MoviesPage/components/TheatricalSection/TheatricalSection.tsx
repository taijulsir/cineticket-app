import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import ToofanAtHoytsInAustralia from './components/ToofanAtHoytsInAustralia/ToofanAtHoytsInAustralia';
import useAxiosPublicInstance from '@/Utilities/Hooks/AxiosInstanceHooks/useAxiosPublicInstance';
import { ErrorMessage } from '../SelectShows/components/Pricing/components/ErrorMessage';

function TheatricalSection({ event }) {
    const { slug, theatricalLink } = event;

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [error, setError] = useState("")
    const axiosPublicInstance = useAxiosPublicInstance()

    const handleBuyTickets = async () => {
        setError("")
        if (name || email || mobileNumber) {

            if (!name || !email || !mobileNumber) {
                setError("Please Add All Field")
                return;
            }
            const itemData = {};
            if (name) itemData.name = name;
            if (email) itemData.email = email
            if (mobileNumber) itemData.mobileNumber = mobileNumber;

            try {
                const response = await axiosPublicInstance.post('/events/toofanAtHoytsInAustralia', itemData)

                if (response) {
                    window.open(theatricalLink, '_blank');
                    setError("")
                    setName("")
                    setEmail("")
                    setMobileNumber("")
                } else {
                    console.error('Failed to save data');
                }
            } catch (error) {
                setError(error)
                console.error('An error occurred:', error);
            }
        } else {
            window.open(theatricalLink, '_blank');
            setError("")
            setName("")
            setEmail("")
            setMobileNumber("")
        }
    };

    return (
        <div className="pt-6">
            {slug === "toofan-at-hoyts-in-australia" && (
                <ToofanAtHoytsInAustralia
                    name={name}
                    setName={setName}
                    email={email}
                    setEmail={setEmail}
                    mobileNumber={mobileNumber}
                    setMobileNumber={setMobileNumber}
                />
            )}

            <ErrorMessage error={error} />

            <Button
                onClick={handleBuyTickets}
                className="w-full hover:bg-transparent hover:text-primary hover:border-[1px] border-primary"
            >
                Buy Tickets
            </Button>
        </div>
    );
}

export default TheatricalSection;



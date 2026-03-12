"use client"
import InputField from "./InputField/InputField";
import ProfileInformationWrapper from "./ProfilInformantionWrapper/ProfileInformationWrapper";

function ProfileInformation({
    name,
    setName,
    mobileNumber,
    setMobileNumber,
    email,
    setEmail,
    selectedShows
}: {
    name?: string;
    setName?: (v: string) => void;
    mobileNumber?: string;
    setMobileNumber?: (v: string) => void;
    email?: string;
    setEmail?: (v: string) => void;
    selectedShows?: any;
}) {
    return (
        <ProfileInformationWrapper>
            <InputField label="Name" type="text" value={name} onChange={(e) => setName?.(e.target.value)} />
            <InputField
                label="Mobile Number"
                type="text"
                value={mobileNumber}
                onChange={(e) => setMobileNumber?.(e.target.value)}
            />
            <InputField label="Email" type="email" value={email} onChange={(e) => setEmail?.(e.target.value)} />
        </ProfileInformationWrapper>
    );
}

export default ProfileInformation;

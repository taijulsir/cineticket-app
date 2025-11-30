"use client"
import InputField from "./InputField/InputField";
import ProfileInformationWrapper from "./ProfilInformantionWrapper/ProfileInformationWrapper";

function ProfileInformation({
    name,
    setName,
    mobileNumber,
    setMobileNumber,
    email,
    setEmail
}) {
    return (
        <ProfileInformationWrapper>
            <InputField
                label="Name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <InputField
                label="Mobile Number"
                type="text"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
            />
            <InputField
                label="Email"
                type="email"
                value={email} f
                onChange={(e) => setEmail(e.target.value)}
            />
        </ProfileInformationWrapper>
    );
}

export default ProfileInformation;

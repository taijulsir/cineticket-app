

function ProfileInformationWrapper({ children }) {
    return (
        <div className="  flex items-center justify-center">
            <div className="p-6 rounded shadow-md w-full max-w-md">
                {children}
            </div>
        </div>
    )
}

export default ProfileInformationWrapper
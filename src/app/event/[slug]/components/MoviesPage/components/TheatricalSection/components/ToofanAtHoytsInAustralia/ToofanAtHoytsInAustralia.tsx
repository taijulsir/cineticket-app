
import "./ToofanHoytsInAustralia.css"
function ToofanAtHoytsInAustralia({
    name, setName,
    email, setEmail,
    mobileNumber, setMobileNumber
}: { name?: any; setName?: any; email?: any; setEmail?: any; mobileNumber?: any; setMobileNumber?: any }) {
    return (
        // <div className="hoyts_contact_form w-full">
        <div 
        className="grid grid-cols-1  gap-4 mb-4
        sm:grid-cols-[repeat(auto-fill,minmax(150px,1fr))] 
        md:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] 
       ">
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Name"
                className="input_field"
            />
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
                className="input_field"
            />
            <input
                type="text"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                placeholder="Enter Phone"
                className="input_field"
            />

        </div>
    )
}

export default ToofanAtHoytsInAustralia
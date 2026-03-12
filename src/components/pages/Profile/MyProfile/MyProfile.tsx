import { useAuth } from "@/context/AuthContext/AuthContext";

function MyProfile() {

  const { customer } = (useAuth() as any) || {};

  return (
    <div className="w-full">
      <h3 className="pb-8  md:text-start hidden md:flex">Profile</h3>

      <div>
        <p className="text-xl font-bold mt-16 md:mt-0 ">Full Name</p>
        <p className="text-lg  font-medium mt-5">{customer?.name}</p>

        <p className="text-xl font-bold mt-10">Email Address</p>
        <p className="text-lg  font-medium mt-5">{customer?.email}</p>
       
       
       
      </div>
    </div>
  );
}

export default MyProfile;

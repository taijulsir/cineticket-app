
import Footer from "@/components/Partials/Footer/Footer";
import Navbar from "@/components/Partials/Navbar/Navbar";
import ProfilePages from "@/components/pages/Profile/ProfilePages/ProfilePages";

export const metadata = {
  title: 'Profile | BongOz Films',
  description: 'BongOz Films - Bringing Quality Movie Experiences to your NeighborHood',
}
function page() {
  return (
    <ProfilePages />
  );
}

export default page;

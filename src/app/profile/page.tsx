
import ProfilePages from "@/components/pages/Profile/ProfilePages/ProfilePages";
import ProtectedRoute from "@/components/ProtectedRoute/ProtectedRoute";

export const metadata = {
  title: 'Profile | CineTicket',
  description: 'CineTicket - Bringing Quality Movie Experiences to your NeighborHood',
}
function page() {
  return (
    <ProtectedRoute>
      <ProfilePages />
    </ProtectedRoute>
  );
}

export default page;

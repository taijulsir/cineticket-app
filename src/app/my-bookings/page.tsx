import ProtectedRoute from "@/components/ProtectedRoute/ProtectedRoute";

export default function Page(){
  return (
    <ProtectedRoute>
      <div className="min-h-screen pt-24 px-6">
        <h1 className="text-2xl font-black text-white">My Bookings</h1>
        <p className="text-gray-400 mt-2">You haven&apos;t booked any tickets yet.</p>
      </div>
    </ProtectedRoute>
  )
}

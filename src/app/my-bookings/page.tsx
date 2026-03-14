import AccountLayout from "@/components/ModernUI/AccountLayout";
import MyBookingsClient from "./MyBookingsClient";

export const metadata = {
  title: 'My Bookings | CineTicket',
  description: 'View your booking history.',
}

export default function MyBookingsPage() {
  return (
    <AccountLayout>
      <MyBookingsClient />
    </AccountLayout>
  );
}

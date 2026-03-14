import AccountLayout from "@/components/ModernUI/AccountLayout";
import MyTicketsClient from "./MyTicketsClient";

export const metadata = {
  title: 'My Tickets | CineTicket',
  description: 'Access your movie tickets and QR codes.',
}

export default function MyTicketsPage() {
  return (
    <AccountLayout>
      <MyTicketsClient />
    </AccountLayout>
  );
}
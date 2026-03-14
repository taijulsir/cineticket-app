
import AccountLayout from "@/components/ModernUI/AccountLayout";
import ProfileClient from "./ProfileClient";

export const metadata = {
  title: 'Profile | CineTicket',
  description: 'Manage your CineTicket profile seamlessly.',
}

export default function ProfilePage() {
  return (
    <AccountLayout>
      <ProfileClient />
    </AccountLayout>
  );
}


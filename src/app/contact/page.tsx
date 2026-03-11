import ContactDetails from "@/Partials/ContactPage/ContactDetails/ContactDetails";
import ContactMap from "@/Partials/ContactPage/ContactMap/ContactMap";


export const metadata = {
  title: 'Contact | BongOz Films',
  description: 'BongOz Films - Bringing Quality Movie Experiences to your NeighborHood',
}
export default function ContacPage() {
  return (
    <div className="mt-[90px] grid grid-cols-1 md:grid-cols-2 w-full px-4 md:px-0 md:w-10/12 mx-auto gap-10 md:gap-32 min-h-screen justify-center items-center mb-24">
      <ContactDetails />
      <ContactMap />
    </div>
  )
}

import TermDescription from "@/Partials/TermsAndConditions/TermDescription/TermDescription"
import TermsTitle from "@/Partials/TermsAndConditions/TermsTitle/TermsTitle"

export const metadata = {
  title: 'Terms-conditions | CineTicket',
  description: 'CineTicket - Bringing Quality Movie Experiences to your NeighborHood',
}

function page() {
  return (
    <div className="w-10/12 mx-auto py-10 mt-[40px] lg:mt-[70px] termsAndConditions">
      <TermsTitle title="Terms - Conditions" />
      <TermDescription />
    </div>
  )
}

export default page

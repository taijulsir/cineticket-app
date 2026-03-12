import SuccessfulPayment from "./SuccessfulPayment";




export const metadata = {
  title: 'Payment | CineTicket',
  description: 'CineTicket - Bringing Quality Movie Experiences to your NeighborHood',
}
function Page({ params }: { params: any }) {
  

  return (
    <SuccessfulPayment params={params} />
  );
}

export default Page;

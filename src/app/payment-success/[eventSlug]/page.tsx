import SuccessfulPayment from "./SuccessfulPayment";




export const metadata = {
  title: 'Payment | BongOz Films',
  description: 'BongOz Films - Bringing Quality Movie Experiences to your NeighborHood',
}
function Page({ params }) {
  

  return (
    <SuccessfulPayment params={params} />
  );
}

export default Page;

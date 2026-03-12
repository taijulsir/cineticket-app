import Payment from "@/components/Payment/Payment"

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Payment | CineTicket',
  description: 'CineTicket - Bringing Quality Movie Experiences to your NeighborHood',
}

function Page() {
  return (
    <div>
      <Payment />
    </div>
  )
}

export default Page

import Payment from "@/components/Payment/Payment"

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Payment | BongOz Films',
  description: 'BongOz Films - Bringing Quality Movie Experiences to your NeighborHood',
}

function Page() {
  return (
    <div>
      <Payment />
    </div>
  )
}

export default Page

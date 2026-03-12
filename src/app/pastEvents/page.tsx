
import Heading from "@/components/Heading/Heading";
import PastEventCard from "./PastEventCard/PastEventCard";
import Ads from "../(Home)/Group/Ads/Ads";

export const metadata = {
    title: 'Events | CineTicket',
    description: 'CineTicket - Bringing Quality Movie Experiences to your NeighborHood',
}
function PastEvents() {

    const status = "past";

    return (
        <div className="w-10/12 mx-auto ">
            <div className="pb-7 md:pb-40 top-padding mt-[90px]">
                <div>
                    <div className="flex justify-between items-center pt-7 pb-8 md:pt-32 md:pb-16">
                        <Heading heading={"Past Events"} extraClass='text-center' />
                    </div>
                    <div>
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-7">
                            <div className="col-span-1 lg:col-span-3">
                                <PastEventCard status={status} />
                            </div>
                            <div className="col-span-1">
                                <Ads paddingTop="pt-0" paddingTopMd="pt-0" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PastEvents;

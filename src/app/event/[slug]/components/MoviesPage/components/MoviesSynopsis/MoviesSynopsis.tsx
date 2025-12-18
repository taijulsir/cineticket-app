import TrailerVideo from '@/components/TrailerVideo/TrailerVideo';
import React from 'react'

function MoviesSynopsis({ event, crews }) {
    const producer = crews?.filter((crew) => crew.type === "Producer");
    const localDistributors = crews?.filter((crew) => crew.type === "localDistributor");

    return (
        <div id="synopsis" className='mt-5'>

            <h3 className="font-medium pt-6 md:pt-0 mt-2">Synopsis</h3>
            <p className="font-light pt-5 pb-2 md:pt-4 md:pb-5">
                {event?.description}
            </p>
            <div className='text-white mb-5'>
                <table>
                    <tbody>
                        <tr>
                            <td className="align-top font-bold">Producer</td>
                            <td className="px-5 align-top">:</td>
                            <td className="align-top">
                                <p className="">{producer?.map((produ) => produ?.name)}</p>
                            </td>
                        </tr>
                        <tr className="">
                            <td className="align-top font-bold">Local Distributor</td>
                            <td className="px-5  align-top">:</td>
                            <td className="align-top">
                                <p className="">{localDistributors?.map((localDistributor, index) => localDistributor?.name)}</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="relative m-auto flex justify-center">
                {event?.trailerVideoLink && (
                    <TrailerVideo link={event.trailerVideoLink} />
                )}
            </div>
        </div>
    )
}

export default MoviesSynopsis

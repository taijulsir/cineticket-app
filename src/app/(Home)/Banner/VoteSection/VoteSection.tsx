import Heading from '@/components/Heading/Heading'
import CardSkeleton from '@/components/SliderEventCard/CardSkeleton/CardSkeleton'
import AppContext from '@/context/AppContext';
import React, { useContext } from 'react'
import MovieVoteCard from './MovieVoteCard/MovieVoteCard';

function VoteSection({voteToBring}: { voteToBring: any[] }) {
    const { isLoading } = useContext(AppContext)!;
    return (
        <div id="vote-section" className="w-10/12 mx-auto pb-4 md:pb-10">
            <div className="h-[40px] lg:h-[100px]"></div>
            <Heading heading={"Vote for Upcoming Movies"} />
            <div className="mx-auto mt-10 pb-8 md:pb-40">
                {isLoading ? (
                    <CardSkeleton />
                ) : (
                    <MovieVoteCard voteToBring={voteToBring} />
                )}
            </div>
        </div>
    )
}

export default VoteSection

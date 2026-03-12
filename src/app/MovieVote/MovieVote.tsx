import Heading from "@/components/Heading/Heading";
import MovieVoteCard from "@/components/MovieVoteCard/MovieVoteCard";
import CardSkeleton from "@/components/SliderEventCard/CardSkeleton/CardSkeleton";
import AppContext from "@/context/AppContext";
import { useContext } from "react";

function MovieVote({ voteToBring }: { voteToBring?: any }) {
  const { isLoading } = useContext(AppContext) as any;
  return (
    <>
      <div className="w-10/12 mx-auto">
        <Heading heading={"Vote for Upcoming Movies"} />
      </div>

      <div className="w-10/12 mx-auto">
        {isLoading ? (
          <CardSkeleton />
        ) : (
          <MovieVoteCard voteToBring={voteToBring} />
        )}
      </div>
    </>
  );
}

export default MovieVote;

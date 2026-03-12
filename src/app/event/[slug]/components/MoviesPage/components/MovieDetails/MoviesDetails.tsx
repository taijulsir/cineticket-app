import { IMAGE_URL } from "@/Utilities/APIs/APIs";
import MovieDetailsWrapper from "./MovieDetailsWrapper/MovieDetailsWrapper";
import MovieImage from "./MovieImage/MovieImage";
import MovieInfoSection from "./MovieInfoSection/MovieInfoSection";

function MoviesDetails({ event }: { event?: any }) {
  const crews = event?.crews;

  const Ratings = crews
    ?.filter((crew: any) => crew.type === "Rating")
    .map((rating: any) => rating.name);
  const director = crews
    ?.filter((crew: any) => crew.type === "Director")
    .map((dir: any) => dir.name);
  const cast = crews?.filter((crew: any) => crew.type === "Cast").map((cas: any) => cas.name);

  return (
    <MovieDetailsWrapper>
      <MovieImage src={IMAGE_URL + event?.cardImage} alt={event?.name} />
      <MovieInfoSection name={event?.name} ratings={Ratings} director={director} cast={cast} />
    </MovieDetailsWrapper>
  );
}

export default MoviesDetails;

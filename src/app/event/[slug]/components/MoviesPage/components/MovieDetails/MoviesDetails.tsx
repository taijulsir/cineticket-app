import { IMAGE_URL } from "@/Utilities/APIs/APIs";
import MovieDetailsWrapper from "./MovieDetailsWrapper/MovieDetailsWrapper";
import MovieImage from "./MovieImage/MovieImage";
import MovieInfoSection from "./MovieInfoSection/MovieInfoSection";


function MoviesDetails({ event }) {
  const crews = event?.crews;

  const Ratings = crews?.filter((crew) => crew.type === "Rating").map((rating) => rating.name);
  const director = crews?.filter((crew) => crew.type === "Director").map((dir) => dir.name);
  const cast = crews?.filter((crew) => crew.type === "Cast").map((cas) => cas.name);


  return (
    <MovieDetailsWrapper>
      <MovieImage src={IMAGE_URL + event?.cardImage} alt={event?.name} />
      <MovieInfoSection
        name={event?.name}
        ratings={Ratings}
        director={director}
        cast={cast}
      />
    </MovieDetailsWrapper>
  );
}

export default MoviesDetails;

import MovieDetailRow from "./MovieDetailRow/MovieDetailRow";

function MovieDetailsTable({ ratings, director, cast }) {
  return (
    <div>
      <table>
        <tbody>
          {ratings?.length ? (
            <MovieDetailRow label="Rating" value={ratings} />
          ) : (
            ""
          )}
          {director?.length ? (
            <MovieDetailRow label="Director" value={director} />
          ) : (
            ""
          )}
          {cast?.length ? <MovieDetailRow label="Cast" value={cast} /> : ""}
        </tbody>
      </table>
    </div>
  );
}

export default MovieDetailsTable;

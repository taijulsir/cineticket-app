import type { EventEntity, ShowEntity } from "./cineticketApi";
import type { Movie, UpcomingMovie } from "@/Utilities/mockData/mockMovies";

function normalizeTrailer(url?: string) {
  if (!url) return "https://www.youtube.com/embed/dQw4w9WgXcQ";
  if (url.includes("embed")) return url;
  if (url.includes("watch?v=")) {
    const id = url.split("watch?v=")[1]?.split("&")[0];
    return id ? `https://www.youtube.com/embed/${id}` : url;
  }
  return url;
}

function mapShow(show: ShowEntity) {
  return {
    theater: show.theater?.name ?? "Theater",
    location: show.hall?.name ?? "",
    times: [show.startTime],
  };
}

export function eventToMovie(event: EventEntity): Movie {
  const isUpcoming = event.status === "UPCOMING";
  const isNowShowing = event.status === "NOW_SELLING";
  const releaseDate = event.releaseDate ? new Date(event.releaseDate).toISOString().slice(0, 10) : "";
  const genres = event.genres?.length ? event.genres : [event.type === "MOVIE" ? "Movie" : "Others"];
  const language = event.language || event.location || "English";
  const format = event.format || "2D";
  return {
    id: event.id,
    title: event.name,
    slug: event.slug,
    genres,
    rating: "8.0",
    runtime: event.duration || "N/A",
    description: event.description || "",
    releaseDate,
    language,
    format,
    posterUrl: event.cardImage || event.bannerImage,
    backdropUrl: event.bannerImage || event.cardImage,
    trailerUrl: normalizeTrailer(event.trailerVideoLink),
    category: isUpcoming ? "Coming Soon" : isNowShowing ? "Now Showing" : "Trending",
    isTrending: isNowShowing,
    isTopRated: isNowShowing || event.status === "PAST",
    cast: [],
    shows: (event.shows ?? []).map(mapShow),
  };
}

export function eventToUpcomingMovie(event: EventEntity): UpcomingMovie {
  return {
    id: event.id,
    title: event.name,
    releaseDate: event.releaseDate ? new Date(event.releaseDate).toISOString().slice(0, 10) : "TBA",
    posterUrl: event.cardImage || event.bannerImage,
    genres: [event.type === "MOVIE" ? "Movie" : "Others"],
    backdropUrl: event.bannerImage,
    description: event.description,
    rating: "0",
    runtime: event.duration,
    trailerUrl: normalizeTrailer(event.trailerVideoLink),
  };
}

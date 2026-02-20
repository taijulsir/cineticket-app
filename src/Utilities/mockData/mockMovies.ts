export interface CastMember {
  name: string;
  role: string;
  image?: string;
}

export interface ShowTime {
  theater: string;
  location?: string;
  times: string[];
}

export interface Movie {
  id: string;
  title: string;
  slug: string;
  genres: string[];
  rating: string;
  runtime: string;
  description: string;
  releaseDate: string;
  language: string;
  format: string;
  posterUrl: string;
  backdropUrl: string;
  trailerUrl: string;
  category: string;
  isTrending: boolean;
  isTopRated: boolean;
  cast: CastMember[];
  shows: ShowTime[];
  tagline?: string;
}

export interface UpcomingMovie {
  id: string;
  title: string;
  releaseDate: string;
  posterUrl: string;
  genres: string[];
  backdropUrl?: string;
  description?: string;
  rating?: string;
  runtime?: string;
  trailerUrl?: string;
}

export const mockMovies: Movie[] = [
  {
    id: "1",
    title: "Dune: Part Two",
    slug: "dune-part-two",
    genres: ["Sci-Fi", "Adventure"],
    rating: "8.8",
    runtime: "166 min",
    description: "Paul Atreides unites with Chani and the Fremen while on a warpath of revenge against the conspirators who destroyed his family.",
    releaseDate: "2024-03-01",
    language: "English",
    format: "IMAX 2D",
    posterUrl: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=600&auto=format&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1200&auto=format&fit=crop",
    trailerUrl: "https://www.youtube.com/embed/Way9Dexny3w",
    category: "Now Showing",
    isTrending: true,
    isTopRated: true,
    cast: [
      { name: "Timothée Chalamet", role: "Paul Atreides", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop" },
      { name: "Zendaya", role: "Chani", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop" }
    ],
    shows: [
      { theater: "Star Cineplex", times: ["10:30 AM", "2:15 PM", "6:45 PM", "9:30 PM"] },
      { theater: "Blockbuster Cinemas", times: ["11:00 AM", "3:30 PM", "7:15 PM"] }
    ]
  },
  {
    id: "2",
    title: "Oppenheimer",
    slug: "oppenheimer",
    genres: ["Biography", "Drama", "History"],
    rating: "8.4",
    runtime: "180 min",
    description: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
    releaseDate: "2023-07-21",
    language: "English",
    format: "70mm / IMAX",
    posterUrl: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=600&auto=format&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1200&auto=format&fit=crop",
    trailerUrl: "https://www.youtube.com/embed/uYPbbksJxIg",
    category: "Now Showing",
    isTrending: false,
    isTopRated: true,
    cast: [
      { name: "Cillian Murphy", role: "J. Robert Oppenheimer" },
      { name: "Emily Blunt", role: "Kitty Oppenheimer" }
    ],
    shows: [
      { theater: "Star Cineplex", times: ["12:00 PM", "4:30 PM", "8:15 PM"] }
    ]
  },
  {
    id: "3",
    title: "Spider-Man: Across the Spider-Verse",
    slug: "spiderman-spider-verse",
    genres: ["Animation", "Action", "Adventure"],
    rating: "8.9",
    runtime: "140 min",
    description: "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence.",
    releaseDate: "2023-06-02",
    language: "English",
    format: "2D",
    posterUrl: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=600&auto=format&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1611848521531-1e9a7e638202?q=80&w=1200&auto=format&fit=crop",
    trailerUrl: "https://www.youtube.com/embed/shW9i6k8cB0",
    category: "Now Showing",
    isTrending: true,
    isTopRated: true,
    cast: [
      { name: "Shameik Moore", role: "Miles Morales" },
      { name: "Hailee Steinfeld", role: "Gwen Stacy" }
    ],
    shows: [
      { theater: "Modhumita Cinema Hall", times: ["3:00 PM", "6:30 PM", "9:45 PM"] }
    ]
  },
  {
    id: "4",
    title: "The Batman",
    slug: "the-batman",
    genres: ["Action", "Crime", "Drama"],
    rating: "7.8",
    runtime: "176 min",
    description: "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption.",
    releaseDate: "2022-03-04",
    language: "English",
    format: "2D / IMAX",
    posterUrl: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=600&auto=format&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?q=80&w=1200&auto=format&fit=crop",
    trailerUrl: "https://www.youtube.com/embed/mqqft22S86M",
    category: "Trending",
    isTrending: true,
    isTopRated: false,
    cast: [
      { name: "Robert Pattinson", role: "Bruce Wayne / Batman" },
      { name: "Zoë Kravitz", role: "Selina Kyle / Catwoman" }
    ],
    shows: []
  },
  {
    id: "8",
    title: "Interstellar",
    slug: "interstellar",
    genres: ["Sci-Fi", "Drama", "Adventure"],
    rating: "8.7",
    runtime: "169 min",
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    releaseDate: "2014-11-07",
    language: "English",
    format: "IMAX 70mm",
    posterUrl: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=600&auto=format&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
    trailerUrl: "https://www.youtube.com/embed/zSWdZVtXT7E",
    category: "Top Rated",
    isTrending: true,
    isTopRated: true,
    cast: [{ name: "Matthew McConaughey", role: "Cooper" }],
    shows: []
  },
  {
    id: "9",
    title: "Inception",
    slug: "inception",
    genres: ["Action", "Sci-Fi", "Thriller"],
    rating: "8.8",
    runtime: "148 min",
    description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea.",
    releaseDate: "2010-07-16",
    language: "English",
    format: "2D",
    posterUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=600&auto=format&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1200&auto=format&fit=crop",
    trailerUrl: "https://www.youtube.com/embed/YoHD9XEInc0",
    category: "Action",
    isTrending: true,
    isTopRated: true,
    cast: [{ name: "Leonardo DiCaprio", role: "Cobb" }],
    shows: []
  }
];

export const upcomingMovies: UpcomingMovie[] = [
  {
    id: "5",
    title: "Deadpool & Wolverine",
    releaseDate: "2024-07-26",
    posterUrl: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?q=80&w=600&auto=format&fit=crop",
    genres: ["Action", "Comedy", "Sci-Fi"]
  },
  {
    id: "6",
    title: "Joker: Folie à Deux",
    releaseDate: "2024-10-04",
    posterUrl: "https://images.unsplash.com/photo-1559581484-9efa23733079?q=80&w=600&auto=format&fit=crop",
    genres: ["Drama", "Thriller", "Crime"]
  },
  {
    id: "7",
    title: "Gladiator II",
    releaseDate: "2024-11-22",
    posterUrl: "https://images.unsplash.com/photo-1568832359672-e36cf5d74f54?q=80&w=600&auto=format&fit=crop",
    genres: ["Action", "Adventure", "Drama"]
  },
  {
    id: "10",
    title: "Moana 2",
    releaseDate: "2024-11-27",
    posterUrl: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=600&auto=format&fit=crop",
    genres: ["Animation", "Adventure", "Family"]
  },
  {
    id: "11",
    title: "Sonic the Hedgehog 3",
    releaseDate: "2024-12-20",
    posterUrl: "https://images.unsplash.com/photo-1611848521531-1e9a7e638202?q=80&w=600&auto=format&fit=crop",
    genres: ["Action", "Adventure", "Family"]
  }
];

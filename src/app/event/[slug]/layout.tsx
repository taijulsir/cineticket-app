import { mockMovies } from "@/Utilities/mockData/mockMovies";

export async function generateMetadata({ params }) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}api/customerApp/public/events/singleEvent/${params.slug}`);
    if (!response.ok) throw new Error('Fetch failed');
    const event = await response.json();
    return {
      title: `${event?.event?.name || 'Event'} | CineTicket`,
      description: 'BongOz Films - Bringing Quality Movie Experiences to your Neighborhood',
    };
  } catch (error) {
    const movie = mockMovies.find(m => m.slug === params.slug);
    return {
      title: `${movie?.title || 'Event'} | CineTicket`,
      description: movie?.description || 'BongOz Films - Bringing Quality Movie Experiences to your Neighborhood',
    };
  }
}

export default function RootLayout({ children }) {
  return <>{children}</>;
}

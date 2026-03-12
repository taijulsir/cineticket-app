import { mockMovies } from "@/Utilities/mockData/mockMovies";

export async function generateMetadata({ params }: { params: any }) {
  try {
    const base = `${(process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:5001/").replace(/\/$/, "")}/api`;
    const response = await fetch(`${base}/events/${params.slug}`, { cache: "no-store" });
    if (!response.ok) throw new Error('Fetch failed');
    const payload = await response.json();
    const event = payload?.success ? payload.data : payload;
    return {
      title: `${event?.name || 'Event'} | CineTicket`,
      description: 'CineTicket - Bringing Quality Movie Experiences to your Neighborhood',
    };
  } catch (error) {
    const movie = mockMovies.find(m => m.slug === params.slug);
    return {
      title: `${movie?.title || 'Event'} | CineTicket`,
      description: movie?.description || 'CineTicket - Bringing Quality Movie Experiences to your Neighborhood',
    };
  }
}

export default function RootLayout({ children }: { children: any }) {
  return <>{children}</>;
}

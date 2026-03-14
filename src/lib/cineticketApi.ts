const API_BASE = `${(process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:5001/").replace(/\/$/, "")}/api`;

function unwrap<T>(payload: any): T {
  if (payload?.success === true) return payload.data as T;
  if (payload?.success === false) throw new Error(payload?.message ?? "Request failed");
  if (payload?.data !== undefined && payload?.meta !== undefined) return payload as T;
  return payload as T;
}

async function getJson<T>(path: string): Promise<T> {
  const response = await fetch(`${API_BASE}${path}`, { cache: "no-store" });
  const payload = await response.json();
  if (!response.ok) throw new Error(payload?.message ?? `GET ${path} failed`);
  return unwrap<T>(payload);
}

async function postJson<T>(path: string, body: unknown): Promise<T> {
  const response = await fetch(`${API_BASE}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const payload = await response.json();
  if (!response.ok) throw new Error(payload?.message ?? `POST ${path} failed`);
  return unwrap<T>(payload);
}

export type EventEntity = {
  id: string;
  name: string;
  slug: string;
  description: string;
  trailerVideoLink: string;
  cardImage: string;
  bannerImage: string;
  releaseDate: string;
  duration: string;
  type: string;
  releaseType: string;
  status: string;
  eventCurrency: string;
  location: string;
  organizer: string;
  language?: string;
  genres?: string[];
  format?: string;
  year?: number;
  shows?: ShowEntity[];
};

export type ShowEntity = {
  id: string;
  date: string;
  startTime: string;
  endTime: string;
  theater?: { id: string; name: string };
  hall?: { id: string; name: string };
};

export type SeatMapRow = {
  row: string;
  seats: Array<{
    id: string;
    hallSeatId?: string;
    seatName?: string;
    label?: string;
    seatType?: string;
    type?: string;
    status?: string;
    state?: string;
  }>;
};

export const cineticketApi = {
  getEvents: (params: { status?: string; type?: string; search?: string; page?: number; limit?: number } = {}) => {
    const query = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== "") query.set(key, String(value));
    });
    return getJson<{ data: EventEntity[]; meta: { total: number; page: number; limit: number } }>(
      `/events${query.toString() ? `?${query}` : ""}`,
    );
  },
  getEventBySlug: (slug: string) => getJson<EventEntity>(`/events/${slug}`),
  getRelatedEvents: (slug: string) => getJson<EventEntity[]>(`/events/${slug}/related`),
  getShowSeatMap: (showId: string) => getJson<{ rows: SeatMapRow[] }>(`/shows/${showId}/seat-map`),
  createOrder: (payload: unknown) => postJson<any>("/orders", payload),
  startStripePayment: (payload: { orderId: string; eventSlug?: string }) =>
    postJson<any>("/payments/stripe/start", payload),
  confirmStripePayment: (payload: { orderId: string; paymentId: string }) =>
    postJson<any>("/payments/stripe/confirm", payload),
  getHeroSliders: () => getJson<any[]>("/hero-sliders"),
  getAds: () => getJson<any[]>("/ads"),
  getSocialLinks: () => getJson<any[]>("/social-links"),
  getTheaters: (params: { cityId?: string; format?: string; search?: string; page?: number; limit?: number } = {}) => {
    const query = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== "") query.set(key, String(value));
    });
    return getJson<{ data: any[]; meta: { total: number; page: number; limit: number } }>(
      `/theaters${query.toString() ? `?${query.toString()}` : ""}`,
    );
  },
  getTheaterBySlug: (slug: string) => getJson<any>(`/theaters/${slug}`),
  getTheaterShows: (id: string) => getJson<any[]>(`/theaters/${id}/shows`),
};

export { API_BASE };

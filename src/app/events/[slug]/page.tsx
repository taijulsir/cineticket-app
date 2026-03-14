
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { cineticketApi } from "@/lib/cineticketApi";
import EventPageClient from "./components/EventPageClient";

interface Props {
  params: { slug: string };
}

export default async function Page({ params }: Props) {
  try {
    const event = await cineticketApi.getEventBySlug(params.slug);
    if (!event) return notFound();

    return (
      <Suspense fallback={<div className="min-h-screen bg-[#0b0b0f] pt-32 animate-pulse" />}>
        <EventPageClient event={event} />
      </Suspense>
    );
  } catch (error) {
    console.error("Error loading event:", error);
    return notFound();
  }
}

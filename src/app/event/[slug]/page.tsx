import React from "react";
import { notFound } from "next/navigation";
import { cineticketApi, type EventEntity } from "@/lib/cineticketApi";
import EventPageClient from "./components/EventPageClient";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // Fetch event data on the server
  const event = await cineticketApi.getEventBySlug(slug).catch(() => null);
  if (!event) return notFound();

  const related = await cineticketApi.getRelatedEvents(slug).catch(() => []);

  // Render a client component for all interactive behavior
  return (
    <EventPageClient event={event as EventEntity} relatedEvents={related as EventEntity[]} slug={slug} />
  );
}

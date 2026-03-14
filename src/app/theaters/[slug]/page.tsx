import React from "react";
import { notFound } from "next/navigation";
import { cineticketApi } from "@/lib/cineticketApi";
import TheaterDetailsClient from "./TheaterDetailsClient";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // Fetch theater data on the server
  const theater = await (cineticketApi as any).getTheaterBySlug(slug).catch(() => null);
  if (!theater) return notFound();

  // Render client component
  return (
    <TheaterDetailsClient initialTheater={theater} />
  );
}

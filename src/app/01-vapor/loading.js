import React from "react";

import { range } from "@/utils";

import LibraryGameCard from "@/components/LibraryGameCard";
import LibraryGameCardSkeleton from "@/components/LibraryGameCardSkeleton";

export const dynamic = "force-dynamic";

async function VaporLoading({ isPlaceholderdata = false }) {
  const games = range(0, 15).map((index) => (
    <LibraryGameCardSkeleton key={index} />
  ));

  return (
    <section className="max-width-wrapper">
      <header className="library-header">
        <h1>My games</h1>
        <p></p>
      </header>
      <div className="game-grid">{games}</div>
    </section>
  );
}

export default VaporLoading;

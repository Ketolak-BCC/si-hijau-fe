"use client";
import { useState } from "react";
import MitraHeader from "../components/MitraHeader";
import MitraSearch from "../components/MitraSearch";
import MitraMapSection from "../components/MitraMapSection";
import MitraList from "../components/MitraList";
import { mitraList } from "../data/mitra";
export default function MitraContainer() {
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const query = search.trim().toLocaleLowerCase("id-ID");
  const partners = mitraList.filter((partner) =>
    [partner.name, partner.city, ...partner.categories]
      .join(" ")
      .toLocaleLowerCase("id-ID")
      .includes(query),
  );
  const selected =
    partners.find((partner) => partner.id === selectedId) ?? null;
  return (
    <div className="font-jakarta-400 min-h-screen bg-neutral-50 px-5 py-8 text-neutral-700 sm:px-8 lg:px-10 xl:px-16">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="space-y-5">
          <MitraHeader />
          <MitraSearch value={search} onChange={setSearch} />
          <MitraMapSection
            partners={partners}
            selected={selected}
            onSelect={(partner) => setSelectedId(partner.id)}
          />
        </div>
        <MitraList partners={partners} />
      </div>
    </div>
  );
}

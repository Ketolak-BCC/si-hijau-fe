"use client";

import { useState } from "react";
import HistoryHeader from "../components/HistoryHeader";
import HistorySearch from "../components/HistorySearch";
import HistorySection from "../components/HistorySection";
import { historyScans } from "../data/history";

export default function HistoryContainer() {
  const [search, setSearch] = useState("");
  const query = search.trim().toLocaleLowerCase("id-ID");
  const filteredScans = historyScans.filter((scan) =>
    `${scan.name} ${scan.category}`.toLocaleLowerCase("id-ID").includes(query),
  );

  return (
    <div className="font-jakarta-400 min-h-screen bg-neutral-50 px-5 py-8 text-neutral-700 sm:px-8 lg:px-10 xl:px-16">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="space-y-5">
          <HistoryHeader />
          <HistorySearch value={search} onChange={setSearch} />
        </div>
        <HistorySection
          title="Riwayat Hari Ini"
          scans={filteredScans.filter((scan) => scan.period === "today")}
        />
        <HistorySection
          title="Riwayat sebelumnya"
          scans={filteredScans.filter((scan) => scan.period === "previous")}
        />
      </div>
    </div>
  );
}

import type { HistoryScan } from "../data/history";
import HistoryCard from "./HistoryCard";

export default function HistorySection({
  title,
  scans,
}: {
  title: string;
  scans: HistoryScan[];
}) {
  return (
    <section className="space-y-4">
      <h2 className="font-jakarta-700 text-green-normal text-lg">
        <span className="bg-green-light px-2 py-0.5">{title}</span>
      </h2>
      {scans.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {scans.map((scan) => (
            <HistoryCard key={scan.id} scan={scan} />
          ))}
        </div>
      ) : (
        <p className="rounded-xl border border-neutral-100 bg-white p-6 text-sm text-neutral-500">
          Tidak ada riwayat yang cocok dengan pencarianmu.
        </p>
      )}
    </section>
  );
}

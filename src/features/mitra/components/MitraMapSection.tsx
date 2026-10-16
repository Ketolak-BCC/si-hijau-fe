"use client";
import dynamic from "next/dynamic";
import { MousePointerClick, MapPin } from "lucide-react";
import CategoryBadge from "@/shared/components/CategoryBadge";
import type { Mitra } from "../data/mitra";
import styles from "./MitraMapSection.module.css";
const MitraMap = dynamic(() => import("./MitraMap"), {
  ssr: false,
  loading: () => (
    <div className="bg-green-light text-green-normal flex h-full items-center justify-center text-sm">
      Memuat peta...
    </div>
  ),
});
export default function MitraMapSection({
  partners,
  selected,
  onSelect,
}: {
  partners: Mitra[];
  selected: Mitra | null;
  onSelect: (mitra: Mitra) => void;
}) {
  return (
    <section aria-label="Peta lokasi mitra" className={styles.layout}>
      <div
        className={styles.mapContainer}
        style={{ height: "24rem", minWidth: 0 }}
      >
        <MitraMap partners={partners} selected={selected} onSelect={onSelect} />
      </div>
      <aside
        aria-live="polite"
        className={`${styles.panel} flex flex-col items-center justify-center rounded-xl bg-white p-5 text-center`}
      >
        {selected ? (
          <div className="space-y-4">
            <MapPin className="text-green-normal mx-auto size-6" />
            <h2 className="font-jakarta-700 text-green-normal">
              {selected.name}
            </h2>
            <p className="text-xs">
              {selected.city} · {selected.distance}
            </p>
            <p className="text-xs leading-relaxed text-neutral-600">
              {selected.description}
            </p>
            <div className="flex flex-wrap justify-center gap-1.5">
              {selected.categories.map((category) => (
                <CategoryBadge key={category}>{category}</CategoryBadge>
              ))}
            </div>
            <p className="text-xs text-neutral-500">
              Lokasi dan jarak merupakan data contoh.
            </p>
          </div>
        ) : (
          <>
            <MousePointerClick className="text-green-normal mb-3 size-6" />
            <p className="max-w-48 text-sm leading-relaxed">
              Klik titik di peta untuk melihat mitra, atau gunakan search bar
              untuk mencari mitra.
            </p>
          </>
        )}
      </aside>
    </section>
  );
}

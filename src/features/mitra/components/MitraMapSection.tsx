"use client";
import dynamic from "next/dynamic";
import { MousePointerClick } from "lucide-react";
import MitraDetailPanel from "./MitraDetailPanel";
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
    <section
      id="mitra-map-section"
      aria-label="Peta lokasi mitra"
      className={`${styles.layout} scroll-mt-6`}
    >
      <div
        className={styles.mapContainer}
        style={{ height: "24rem", minWidth: 0 }}
      >
        <MitraMap partners={partners} selected={selected} onSelect={onSelect} />
      </div>
      <aside
        aria-live="polite"
        className={`${styles.panel} flex flex-col ${selected ? "items-stretch justify-start" : "items-center justify-center rounded-xl bg-white p-5 text-center"}`}
      >
        {selected ? (
          <MitraDetailPanel partner={selected} />
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

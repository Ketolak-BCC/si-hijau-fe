import FeatureSection from "@/shared/components/FeatureSection";
import MitraCard from "./MitraCard";
import type { Mitra } from "../data/mitra";
export default function MitraList({
  partners,
  onSelect,
}: {
  partners: Mitra[];
  onSelect: (mitra: Mitra) => void;
}) {
  return (
    <FeatureSection title="Lihat Lebih Banyak Mitra">
      {partners.length ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {partners.map((partner) => (
            <MitraCard key={partner.id} partner={partner} onSelect={onSelect} />
          ))}
        </div>
      ) : (
        <p
          role="status"
          className="rounded-xl bg-white p-6 text-sm text-neutral-500"
        >
          Mitra tidak ditemukan. Coba nama, kota, atau jenis sampah lain.
        </p>
      )}
    </FeatureSection>
  );
}

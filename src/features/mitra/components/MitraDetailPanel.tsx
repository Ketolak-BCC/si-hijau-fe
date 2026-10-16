import { MapPin, Navigation } from "lucide-react";
import CategoryBadge from "@/shared/components/CategoryBadge";
import DetailDialog from "@/shared/components/DetailDialog";
import type { Mitra } from "../data/mitra";

export default function MitraDetailPanel({ partner }: { partner: Mitra }) {
  return (
    <div className="flex h-full w-full flex-col gap-5 text-left">
      <div className="space-y-2">
        <h2 className="font-jakarta-700 text-green-normal text-lg">
          {partner.name}
        </h2>
        <div className="flex flex-wrap gap-4 text-xs">
          <span className="flex items-center gap-1">
            <MapPin className="size-4" />
            {partner.city}
          </span>
          <span className="flex items-center gap-1">
            <Navigation className="size-4" />
            {partner.distance}
          </span>
        </div>
      </div>
      <p className="text-sm leading-relaxed text-neutral-600">
        {partner.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {partner.categories.map((category) => (
          <CategoryBadge key={category}>{category}</CategoryBadge>
        ))}
      </div>
      <div className="mt-auto space-y-2">
        <DetailDialog
          title={`Cara serahkan sampah ke ${partner.name}`}
          label="Cara serahkan sampah"
        >
          <ol className="list-decimal space-y-3 pl-5">
            <li>
              Pilah sampah sesuai jenis yang diterima:{" "}
              {partner.categories.join(", ")}.
            </li>
            <li>
              Bersihkan dan keringkan sampah yang dapat didaur ulang. Pisahkan
              sampah organik dalam wadah tertutup.
            </li>
            <li>
              Hubungi mitra untuk memastikan jadwal dan ketentuan penerimaan
              sebelum datang.
            </li>
          </ol>
        </DetailDialog>
        <DetailDialog
          title={`Kontak ${partner.name}`}
          label="Kontak Mitra"
          primary
        >
          <p>
            Informasi kontak mitra belum tersedia karena data masih berupa
            contoh. Kontak resmi akan ditampilkan setelah data mitra terhubung.
          </p>
        </DetailDialog>
      </div>
    </div>
  );
}

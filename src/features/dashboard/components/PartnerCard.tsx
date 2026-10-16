import Image from "next/image";
import { MapPin, Navigation } from "lucide-react";
import type { Partner } from "../data/dashboard";
import CategoryBadge from "@/shared/components/CategoryBadge";
import DetailDialog from "@/shared/components/DetailDialog";

export default function PartnerCard({ partner }: { partner: Partner }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-neutral-100 bg-white shadow-sm">
      <div className="relative aspect-[1.85]">
        <Image
          src={partner.image}
          alt={partner.name}
          fill
          unoptimized
          sizes="(max-width: 640px) 100vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <h3 className="font-jakarta-600 text-green-normal">{partner.name}</h3>
        <div className="flex flex-wrap gap-4 text-xs">
          <span className="flex items-center gap-1">
            <MapPin className="size-3.5" />
            {partner.city}
          </span>
          <span className="flex items-center gap-1">
            <Navigation className="size-3.5" />
            {partner.distance}
          </span>
        </div>
        <p className="flex-1 text-xs leading-relaxed text-neutral-600">
          {partner.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {partner.categories.map((category) => (
            <CategoryBadge key={category}>{category}</CategoryBadge>
          ))}
        </div>
        <DetailDialog title={partner.name}>
          <div className="space-y-4">
            <p>
              {partner.city} · {partner.distance}
            </p>
            <p>{partner.description}</p>
            <p>Jenis sampah yang diterima: {partner.categories.join(", ")}.</p>
            <p className="text-neutral-600">
              Informasi mitra ini merupakan data contoh.
            </p>
          </div>
        </DetailDialog>
      </div>
    </article>
  );
}

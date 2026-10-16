import Image from "next/image";
import { MapPin, Navigation } from "lucide-react";
import type { Mitra } from "../data/mitra";
import CategoryBadge from "@/shared/components/CategoryBadge";
import { Button } from "@/shared/components/ui/button";

export default function MitraCard({
  partner,
  onSelect,
}: {
  partner: Mitra;
  onSelect: (mitra: Mitra) => void;
}) {
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
        <Button
          variant="outline"
          className="text-green-normal w-full rounded-xl"
          onClick={() => onSelect(partner)}
        >
          Lihat Detail
        </Button>
      </div>
    </article>
  );
}

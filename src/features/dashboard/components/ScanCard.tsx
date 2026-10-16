import Image from "next/image";
import type { ScanItem } from "../data/dashboard";
import CategoryBadge from "./CategoryBadge";
import DetailDialog from "./DetailDialog";
export default function ScanCard({ scan }: { scan: ScanItem }) {
  return (
    <article className="overflow-hidden rounded-xl border border-neutral-100 bg-white shadow-sm">
      <div className="relative aspect-[1.85]">
        <Image
          src={scan.image}
          alt={scan.name}
          fill
          unoptimized
          sizes="(max-width: 640px) 100vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="space-y-3 p-4">
        <h3 className="font-jakarta-600 text-green-normal">{scan.name}</h3>
        <CategoryBadge>{scan.category}</CategoryBadge>
        <DetailDialog title={scan.name}>
          <div className="space-y-4">
            <CategoryBadge>{scan.category}</CategoryBadge>
            <p>{scan.guidance}</p>
          </div>
        </DetailDialog>
      </div>
    </article>
  );
}

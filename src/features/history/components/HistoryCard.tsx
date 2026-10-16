import Image from "next/image";
import CategoryBadge from "@/features/dashboard/components/CategoryBadge";
import DetailDialog from "@/features/dashboard/components/DetailDialog";
import type { HistoryScan } from "../data/history";

export default function HistoryCard({ scan }: { scan: HistoryScan }) {
  return (
    <article className="overflow-hidden rounded-xl border border-neutral-100 bg-white shadow-sm">
      <div className="bg-green-light relative aspect-[1.85] overflow-hidden">
        <Image
          src={scan.image}
          alt={scan.name}
          fill
          unoptimized
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="space-y-3 p-4">
        <h3 className="font-jakarta-600 text-green-normal text-sm">
          {scan.name}
        </h3>
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

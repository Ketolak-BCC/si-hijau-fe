import { Star } from "lucide-react";
import DetailDialog from "./DetailDialog";
export default function PointsCard({
  points,
  managedWaste,
}: {
  points: number;
  managedWaste: number;
}) {
  return (
    <section
      aria-label="Ringkasan poin"
      className="relative isolate flex flex-col gap-6 overflow-hidden rounded-xl border border-neutral-100 bg-white p-6 sm:flex-row sm:items-center sm:p-8"
    >
      <div
        aria-hidden="true"
        className="bg-green-light-active/70 absolute -top-16 -right-8 -z-10 size-52 rounded-full"
      />
      <Star
        aria-hidden="true"
        className="fill-warning-700 text-warning-700 size-24 shrink-0"
        strokeWidth={0}
      />
      <div className="flex-1">
        <p className="text-xs uppercase">Poin Anda</p>
        <p className="font-jakarta-700 mt-1 text-3xl text-neutral-950">
          {points} Poin
        </p>
        <p className="mt-4 max-w-sm text-sm leading-relaxed">
          Kamu sudah menyalurkan lebih dari {managedWaste} kg sampah organik.
          Setara dengan pupuk kompos untuk 1 hektar lahan!
        </p>
      </div>
      <div className="w-full shrink-0 sm:w-40">
        <DetailDialog title="Reward Anda" label="Tukar Reward" primary>
          <p>
            Kamu memiliki <strong>{points} poin</strong>. Pilihan voucher dan
            penukaran reward akan tersedia setelah layanan reward terhubung.
          </p>
        </DetailDialog>
      </div>
    </section>
  );
}

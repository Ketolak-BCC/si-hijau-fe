import { Star } from "lucide-react";
import Link from "next/link";
import { dashboardSummary } from "../data/dashboard";
export default function RewardPointsCard() {
  return (
    <section
      aria-label="Poin Anda"
      className="relative isolate flex flex-col gap-5 overflow-hidden rounded-xl border border-neutral-100 bg-white p-6 sm:flex-row sm:items-center sm:p-8"
    >
      <div
        aria-hidden="true"
        className="bg-green-light-active absolute -top-14 -right-8 -z-10 size-44 rounded-full"
      />
      <div
        aria-hidden="true"
        className="bg-green-light absolute right-20 -bottom-16 -z-10 size-44 rounded-full"
      />
      <Star
        aria-hidden="true"
        className="fill-warning-700 text-warning-700 size-24 shrink-0"
        strokeWidth={0}
      />
      <div className="flex-1">
        <p className="text-xs uppercase">Poin Anda</p>
        <p className="font-jakarta-700 mt-1 text-3xl text-black">
          {dashboardSummary.points} Poin
        </p>
        <p className="mt-4 max-w-md text-sm leading-relaxed">
          Kamu sudah menyalurkan lebih dari {dashboardSummary.managedWaste} kg
          sampah organik.
          <br />
          Kamu menghemat gas emisi karbon dari dunia!
        </p>
      </div>
      <Link
        href="#hadiah"
        className="bg-green-normal hover:bg-green-normal-hover focus-visible:outline-green-normal flex h-12 shrink-0 items-center justify-center rounded-xl px-8 text-sm font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        Claim Reward
      </Link>
    </section>
  );
}

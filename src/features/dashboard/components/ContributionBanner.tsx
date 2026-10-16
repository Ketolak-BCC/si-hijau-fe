import CategoryBadge from "@/shared/components/CategoryBadge";
import Link from "next/link";
export default function ContributionBanner() {
  return (
    <div className="flex flex-col gap-6 rounded-xl border border-neutral-100 bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
      <div className="space-y-3">
        <CategoryBadge>Free Poin & Voucher!</CategoryBadge>
        <h3 className="font-jakarta-700 text-green-normal">
          Buktikan Aksi Hijau Pengolahan Sampahmu!
        </h3>
        <p className="max-w-xl text-sm leading-relaxed">
          Masukkan foto hasil pengolahan sampah yang kamu lakukan untuk
          mendapatkan poin dan menukarkannya dengan voucher.
        </p>
      </div>
      <div className="shrink-0 sm:w-44">
        <Link
          href="/beranda/klaim-reward"
          className="bg-green-normal hover:bg-green-normal-hover focus-visible:outline-green-normal flex h-12 items-center justify-center rounded-xl px-6 text-sm font-medium text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          Mau buktikan!
        </Link>
      </div>
    </div>
  );
}

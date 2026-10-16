import CategoryBadge from "./CategoryBadge";
import DetailDialog from "./DetailDialog";
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
        <DetailDialog
          title="Buktikan Aksi Hijaumu"
          label="Mau buktikan!"
          primary
        >
          <p>
            Siapkan foto hasil pengolahan sampahmu. Pengiriman bukti dan
            pemberian poin akan tersedia setelah layanan verifikasi terhubung.
          </p>
        </DetailDialog>
      </div>
    </div>
  );
}

import { Button } from "@/shared/components/ui/button";
import type { Voucher } from "../data/rewards";
import VoucherArtwork from "./VoucherArtwork";
import DetailDialog from "./DetailDialog";
interface VoucherCardProps {
  voucher: Voucher;
  claimed: boolean;
  onClaim?: () => void;
}
export default function VoucherCard({
  voucher,
  claimed,
  onClaim,
}: VoucherCardProps) {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-neutral-100 bg-white shadow-sm">
      <VoucherArtwork />
      <div className="flex flex-1 flex-col items-start gap-3 p-4">
        <h3 className="font-jakarta-600 text-green-normal text-sm">
          {voucher.name}
        </h3>
        <p className="text-xs text-neutral-500">{voucher.description}</p>
        {claimed && (
          <span className="text-green-dark rounded-full bg-[#86d957] px-3 py-1 text-xs">
            Claimed
          </span>
        )}
        <div className="mt-auto w-full">
          {claimed ? (
            <DetailDialog title={voucher.name} label="Gunakan">
              <p>Tunjukkan kode voucher ini saat bertransaksi:</p>
              <p className="bg-green-light my-4 rounded-lg p-4 text-center font-mono text-lg font-bold">
                {voucher.code}
              </p>
              <p className="text-neutral-500">
                Voucher demo untuk pratinjau tampilan, belum dapat digunakan
                untuk transaksi.
              </p>
            </DetailDialog>
          ) : (
            <Button
              variant="outline"
              className="text-green-normal w-full rounded-xl"
              onClick={onClaim}
            >
              Klaim
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}

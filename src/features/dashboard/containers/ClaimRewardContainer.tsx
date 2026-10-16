"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { SidebarTrigger } from "@/shared/components/ui/sidebar";
import DashboardSection from "../components/DashboardSection";
import RewardPointsCard from "../components/RewardPointsCard";
import VoucherCard from "../components/VoucherCard";
import { availableRewards, ownedVouchers } from "../data/rewards";
export default function ClaimRewardContainer() {
  const [claimedIds, setClaimedIds] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  const vouchers = [
    ...ownedVouchers,
    ...availableRewards.filter((voucher) => claimedIds.includes(voucher.id)),
  ];
  return (
    <div className="font-jakarta-400 min-h-screen bg-neutral-50 px-5 py-8 text-neutral-700 sm:px-8 lg:px-10 xl:px-16">
      <div className="mx-auto max-w-6xl space-y-8">
        <header className="flex items-center gap-2">
          <SidebarTrigger className="md:hidden" />
          <Link
            href="/beranda"
            aria-label="Kembali ke beranda"
            className="text-green-normal hover:bg-green-light rounded-md p-1"
          >
            <ChevronLeft className="size-5" />
          </Link>
          <h1 className="font-jakarta-700 text-green-normal text-2xl md:text-[28px]">
            Klaim Reward
          </h1>
        </header>
        <RewardPointsCard />
        <DashboardSection title="Voucher Kamu">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {vouchers.map((voucher) => (
              <VoucherCard key={voucher.id} voucher={voucher} claimed />
            ))}
          </div>
        </DashboardSection>
        <section id="hadiah" className="scroll-mt-6">
          <DashboardSection title="Hadiah menarik untuk Anda">
            <p role="status" className="text-green-normal text-sm">
              {message ||
                "Pratinjau voucher — klaim demo tidak mengurangi poin."}
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {availableRewards
                .filter((voucher) => !claimedIds.includes(voucher.id))
                .map((voucher) => (
                  <VoucherCard
                    key={voucher.id}
                    voucher={voucher}
                    claimed={false}
                    onClaim={() => {
                      setClaimedIds((ids) => [...ids, voucher.id]);
                      setMessage(
                        "Voucher demo berhasil ditambahkan ke Voucher Kamu.",
                      );
                    }}
                  />
                ))}
            </div>
          </DashboardSection>
        </section>
      </div>
    </div>
  );
}

export interface Voucher {
  id: string;
  name: string;
  description: string;
  code: string;
}
export const ownedVouchers: Voucher[] = Array.from(
  { length: 3 },
  (_, index) => ({
    id: `owned-${index + 1}`,
    name: "Voucher Kafe",
    description: "Diskon 50% untuk menu pilihan di kafe favoritmu.",
    code: `HIJAU-KAFE-00${index + 1}`,
  }),
);
export const availableRewards: Voucher[] = Array.from(
  { length: 6 },
  (_, index) => ({
    id: `reward-${index + 1}`,
    name: "Voucher Kafe",
    description: "Diskon 50% untuk menu pilihan di kafe favoritmu.",
    code: `HIJAU-REWARD-00${index + 1}`,
  }),
);

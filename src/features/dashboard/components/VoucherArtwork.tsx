export default function VoucherArtwork() {
  return (
    <div
      aria-hidden="true"
      className="relative flex aspect-[1.85] items-center justify-center overflow-hidden bg-[#f1f3f7] p-4"
    >
      <div className="absolute h-24 w-44 -rotate-[24deg] rounded-md bg-[#b7c97e] shadow-md" />
      <div className="relative flex h-24 w-48 rotate-[15deg] overflow-hidden rounded-md bg-[#f5bd53] shadow-lg">
        <div className="bg-green-normal flex w-3/5 flex-col justify-center px-3 text-[#fff2b4]">
          <span className="text-[9px] font-bold tracking-widest">GIFT</span>
          <span className="text-lg leading-none font-black">VOUCHER</span>
          <span className="mt-1 text-[9px]">YOUR FAVORITE CAFE</span>
          <span className="text-xl font-bold">
            50% <small className="text-[8px]">DISC</small>
          </span>
        </div>
        <span className="absolute -right-1 bottom-0 text-7xl">🍕</span>
      </div>
    </div>
  );
}

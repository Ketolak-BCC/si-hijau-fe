import { Search } from "lucide-react";
export default function MitraSearch({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="relative">
      <label htmlFor="mitra-search" className="sr-only">
        Cari nama, kota, atau jenis sampah mitra
      </label>
      <input
        id="mitra-search"
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Cari mitra atau jenis sampah..."
        className="border-green-light-active focus:border-green-normal focus:ring-green-normal/15 h-12 w-full rounded-xl border bg-white py-3 pr-12 pl-4 text-sm outline-none placeholder:text-neutral-400 focus:ring-2"
      />
      <Search
        aria-hidden="true"
        className="text-green-normal pointer-events-none absolute top-1/2 right-4 size-5 -translate-y-1/2"
      />
    </div>
  );
}

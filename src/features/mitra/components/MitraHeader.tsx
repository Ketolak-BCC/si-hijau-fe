import { SidebarTrigger } from "@/shared/components/ui/sidebar";
export default function MitraHeader() {
  return (
    <header className="flex items-center gap-3">
      <SidebarTrigger className="md:hidden" />
      <h1 className="font-jakarta-700 text-green-normal text-2xl md:text-[28px]">
        Mitra
      </h1>
    </header>
  );
}

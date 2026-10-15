import { Button } from "@/shared/components/ui/button";
import BackgroundPattern from "@/shared/components/BackgroundPattern";

const Hero = () => {
  return (
    <section className="flex flex-col gap-8 pt-18">
      <h1 className="font-jakarta-700 text-green-normal px-16 text-[48px] leading-20">
        Bingung Kelola Sampah Rumah?
        <br />
        Scan Aja Pakai{" "}
        <span className="bg-green-normal px-4 py-2 text-neutral-50">
          SiHijau
        </span>
      </h1>
      <div className="flex items-center gap-4 px-16">
        <Button className="bg-green-normal hover:bg-green-normal-hover">
          Coba SiHijau!
        </Button>
        <Button className="text-green-normal hover:bg-green-normal-hover border-green-normal bg-transparent hover:text-white">
          Pelajari Lebih Lanjut
        </Button>
      </div>
      <BackgroundPattern className="h-full w-full" />
    </section>
  );
};

export default Hero;

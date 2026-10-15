import { Button } from "@/shared/components/ui/button";

const Hero = () => {
  return (
    <section className="flex flex-col gap-8 px-16 pt-18">
      <h1 className="font-jakarta-700 text-green-normal text-[48px] leading-20">
        Bingung Kelola Sampah Rumah?
        <br />
        Scan Aja Pakai{" "}
        <span className="bg-green-normal px-4 py-2 text-neutral-50">
          SiHijau
        </span>
      </h1>
      <div className="flex items-center gap-4">
        <Button className="bg-green-normal hover:bg-green-normal-hover">
          Coba SiHijau!
        </Button>
        <Button className="text-green-normal hover:bg-green-normal-hover border-green-normal bg-transparent hover:text-white">
          Pelajari Lebih Lanjut
        </Button>
      </div>
    </section>
  );
};

export default Hero;

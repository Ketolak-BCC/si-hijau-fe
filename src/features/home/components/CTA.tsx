import { Button } from "@/shared/components/ui/button";

const CTA = () => {
  return (
    <section className="my-42 flex flex-col gap-10 px-16">
      <div className="mx-auto flex w-[80%] flex-col gap-4">
        <h1 className="font-jakarta-700 text-green-normal text-center text-[40px] leading-14">
          Siap Mulai Perubahan dari Rumah?
        </h1>
        <p className="font-jakarta-400 text-center text-[24px] leading-8">
          Urusan sampah tangga nggak perlu dibikin ribet lagi. Biar kita yang
          bantu mulai dari proses scan pakai kamera sampai nemuin partner yang
          paling cocok buat nampung limbahnya. Yuk mulai gaya hidup sustainable
          kita sekarang juga.
        </p>
      </div>
      <Button className="bg-green-normal hover:bg-green-normal-hover mx-auto w-full max-w-[20%]">
        Coba SiHijau!
      </Button>
    </section>
  );
};

export default CTA;

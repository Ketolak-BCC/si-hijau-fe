import { caraKerja } from "@/features/home/data/data";

const CaraKerja = () => {
  return (
    <section id="cara-kerja" className="mt-42 flex flex-col gap-26 px-16">
      <h1 className="font-jakarta-700 text-green-normal text-[48px] leading-20">
        Cara Kerja{" "}
        <span className="bg-green-normal px-4 py-2 text-neutral-50">
          SiHijau
        </span>
      </h1>
      <div className="flex items-center justify-center gap-6">
        {caraKerja.map((item) => (
          <div
            key={item.id}
            className="flex max-w-105 flex-col items-center gap-6 px-2"
          >
            <div className="bg-green-normal flex size-24 items-center justify-center rounded-full">
              <p className="font-jakarta-700 text-[40px] leading-14 text-neutral-50">
                {item.id}
              </p>
            </div>
            <h3 className="font-jakarta-700 text-[32px] leading-10">
              {item.title}
            </h3>
            <p className="font-jakarta-400 text-center text-[20px] leading-7">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaraKerja;

import { keunggulan } from "@/features/home/data/data";
import Image from "next/image";

const Keunggulan = () => {
  return (
    <section className="mt-42 flex flex-col gap-26 px-16">
      <h1 className="font-jakarta-700 text-green-normal text-center text-[48px] leading-20">
        Keunggulan{" "}
        <span className="bg-green-normal px-4 py-2 text-neutral-50">
          SiHijau
        </span>
      </h1>
      <div className="flex items-center justify-center gap-6">
        {keunggulan.map((item) => (
          <div
            key={item.id}
            className="bg-green-normal flex flex-col items-center gap-6 rounded-[16px] px-6 py-12"
          >
            <Image
              src={item.img}
              alt={item.img}
              width={128}
              height={128}
              className="size-32"
            />
            <h3 className="font-jakarta-700 text-center text-[32px] leading-10 text-neutral-50">
              {item.title}
            </h3>
            <p className="font-jakarta-400 text-center text-base leading-7 text-neutral-50">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Keunggulan;

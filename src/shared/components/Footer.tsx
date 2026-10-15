import Image from "next/image";
import Link from "next/link";

const link = [
  { id: 1, label: "Beranda", link: "#beranda" },
  { id: 2, label: "Cara Kerja", link: "#cara-kerja" },
  { id: 3, label: "Keunggulan", link: "#keunggulan" },
];

const Footer = () => {
  return (
    <footer className="bg-green-normal flex items-center justify-between p-16 pb-30">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <Image
            src="logo-white.svg"
            alt="SiHijau Logo"
            width={24}
            height={24}
            className="size-8 lg:size-14"
          />
          <h1 className="font-jakarta-700 text-[32px] text-neutral-50">
            SiHijau
          </h1>
        </div>
        <p className="font-jakarta-400 w-[40%] text-sm text-white">
          SiHijau adalah aplikasi berbasis Waste Scanner yang siap bantu kita
          mengenali, mengolah, dan menyalurkan limbah rumah tangga dengan
          praktis demi mendukung gaya hidup sustainable.
        </p>
      </div>
      <div className="flex flex-col gap-8 text-right text-white">
        <p className="font-jakarta-700 text-[24px] uppercase">Navigasi</p>
        <div className="flex flex-col gap-2">
          {link.map((item) => (
            <Link
              href={item.link}
              key={item.id}
              className="font-jakarta-400 text-[20px]"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

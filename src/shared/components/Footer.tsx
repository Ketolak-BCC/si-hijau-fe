"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const link = [
  { id: 1, label: "Beranda", link: "#beranda" },
  { id: 2, label: "Cara Kerja", link: "#cara-kerja" },
  { id: 3, label: "Keunggulan", link: "#keunggulan" },
];

const Footer = () => {
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    e.preventDefault();

    const target = document.querySelector(link);

    if (target) {
      target.scrollIntoView({
        block: "start",
      });
    }

    window.history.pushState(null, "", link);
  };

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
        <div className="flex flex-col items-end gap-2">
          {link.map((item) => (
            <Link
              href={item.link}
              key={item.id}
              onClick={(e) => handleNav(e, item.link)}
              className="group font-jakarta-400 inline-flex items-center gap-1 text-[20px] text-white/70 transition-colors duration-300 hover:text-white"
            >
              <span className="relative">
                {item.label}

                <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-neutral-50 transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </span>

              <span className="w-0 shrink-0 overflow-hidden transition-[width] duration-300 ease-out group-hover:w-4">
                <ArrowUpRight className="size-4 -translate-x-1 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

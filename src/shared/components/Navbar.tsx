"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { usePathname } from "next/navigation";

const link = [
  { id: 1, label: "Beranda", link: "/#beranda" },
  { id: 2, label: "Cara Kerja", link: "/#cara-kerja" },
  { id: 3, label: "Keunggulan", link: "/#keunggulan" },
];

const Navbar = () => {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const underlineRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      gsap.set(underlineRef.current, {
        scaleX: 0,
        transformOrigin: "left center",
      });
    },
    { scope: navRef },
  );

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    if (pathname === "/") {
      e.preventDefault();

      const targetId = link.split("#")[1];
      const target = document.getElementById(targetId);

      if (target) {
        target.scrollIntoView({
          block: "start",
        });
      }

      window.history.pushState(null, "", link);
    }
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = e.currentTarget;
    const underline = underlineRef.current;

    if (!underline) return;

    gsap.to(underline, {
      x: target.offsetLeft,
      width: target.offsetWidth,
      scaleX: 1,
      duration: 0.35,
      ease: "power3.out",
      overwrite: true,
    });
  };

  const handleMouseLeave = () => {
    if (!underlineRef.current) return;

    gsap.to(underlineRef.current, {
      scaleX: 0,
      duration: 0.25,
      ease: "power2.inOut",
      overwrite: true,
    });
  };

  return (
    <nav ref={navRef} className="flex items-center justify-between px-16 pt-8">
      <div className="flex items-center gap-2">
        <Image
          src="/logo.svg"
          alt="SiHijau Logo"
          width={24}
          height={24}
          className="size-8 lg:size-14"
        />
        <h1 className="font-jakarta-700 text-green-normal text-[32px]">
          SiHijau
        </h1>
      </div>
      <div className="flex items-center gap-10">
        <div
          ref={menuRef}
          onMouseLeave={handleMouseLeave}
          className="relative flex items-center gap-10 pb-2"
        >
          {link.map((item) => (
            <Link
              href={item.link}
              key={item.id}
              onMouseEnter={handleMouseEnter}
              onClick={(e) => handleNav(e, item.link)}
              className="font-jakarta-400 text-[20px]"
            >
              {item.label}
            </Link>
          ))}

          <span
            ref={underlineRef}
            className="bg-green-normal absolute bottom-0 left-0 h-0.5 rounded-full"
          />
        </div>

        <Link
          href="/masuk"
          className="bg-green-normal hover:bg-green-normal-hover rounded-[16px] px-6 py-4 text-white"
        >
          Daftar SiHijau
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/shared/components/ui/button";

const link = [
  { id: 1, label: "Beranda", link: "#beranda" },
  { id: 2, label: "Cara Kerja", link: "#cara-kerja" },
  { id: 3, label: "Keunggulan", link: "#keunggulan" },
];

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-16 pt-8">
      <div className="flex items-center gap-2">
        <Image
          src="logo.svg"
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
        {link.map((item) => (
          <Link href={item.link} key={item.id}>
            {item.label}
          </Link>
        ))}
        <Button className="bg-green-normal hover:bg-green-normal-hover">
          Gabung!
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;

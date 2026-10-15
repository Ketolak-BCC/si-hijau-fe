"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/shared/components/ui/sidebar";
import Image from "next/image";
import React from "react";
import {
  CircleUserRound,
  Handshake,
  House,
  RotateCcwClock,
  ScanLine,
} from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const nav = [
  { id: 1, label: "Beranda", link: "/beranda", icon: House },
  { id: 2, label: "Mitra", link: "/mitra", icon: Handshake },
  { id: 3, label: "Riwayat", link: "/riwayat", icon: RotateCcwClock },
  { id: 4, label: "Profile", link: "/profile", icon: CircleUserRound },
];

const SidebarDashboard = () => {
  const pathname = usePathname();

  return (
    <Sidebar className="flex w-75 flex-col gap-8">
      <SidebarHeader className="flex flex-col gap-8 px-6 py-12">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="SiHijau Logo"
            width={24}
            height={24}
            className="size-8 lg:size-12"
          />
          <h1 className="font-jakarta-700 text-green-normal text-[24px]">
            SiHijau
          </h1>
        </div>
        <Link
          href="/pindai"
          className="font-jakarta-700 bg-green-normal flex h-12 items-center justify-center gap-4 rounded-[12px] text-white uppercase"
        >
          <ScanLine size={24} className="size-6" />
          Pindai Sampah
        </Link>
      </SidebarHeader>
      <SidebarContent className="px-3">
        <SidebarGroup className="flex flex-col gap-6">
          <SidebarGroupLabel className="font-jakarta-600 text-[#A9A6A6] uppercase">
            Navigasi
          </SidebarGroupLabel>
          <SidebarMenu className="flex flex-col gap-2">
            {nav.map((item) => {
              const isActive = pathname === item.link;
              const Icon = item.icon;

              return (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    isActive={isActive}
                    className={`font-jakarta-500 text-[20px] transition-colors duration-300 ${
                      isActive
                        ? "bg-green-light! text-green-normal! hover:bg-green-light!"
                        : ""
                    } `}
                  >
                    <Link className="flex items-center gap-4" href={item.link}>
                      <Icon className="size-6!" />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
          <SidebarMenu className="mt-20 flex flex-col gap-2">
            <SidebarMenuItem>
              <SidebarMenuButton className="font-jakarta-500 text-green-normal hover:bg-green-normal-hover border-green-normal flex h-12 items-center justify-center border bg-transparent hover:text-white">
                Keluar
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default SidebarDashboard;

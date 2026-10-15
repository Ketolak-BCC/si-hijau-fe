import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SiHijau – Scan, Kelola, dan Salurkan Sampah Rumah Tanggamu",
  description:
    "SiHijau membantu kamu mengidentifikasi jenis sampah rumah tangga lewat kamera, memberi rekomendasi pengolahan (kompos, budidaya BSF, daur ulang), dan menghubungkanmu dengan partner penerima limbah terdekat. Ubah sampah jadi manfaat, tanpa ribet.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={cn("h-full", "antialiased", jakartaSans.variable, "font-sans", inter.variable)}>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}

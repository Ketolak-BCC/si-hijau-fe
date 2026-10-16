export interface ScanItem {
  id: string;
  name: string;
  category: string;
  image: string;
  guidance: string;
}
export interface Partner {
  id: string;
  name: string;
  city: string;
  distance: string;
  description: string;
  categories: string[];
  image: string;
}
export const dashboardSummary = {
  name: "Fahry",
  points: 100,
  managedWaste: 128,
};
export const recentScans: ScanItem[] = [
  {
    id: "scan-1",
    name: "Kulit Sayur & Buah",
    category: "Organik",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80",
    guidance:
      "Pisahkan dari kemasan plastik. Potong kecil-kecil untuk dijadikan kompos atau salurkan ke mitra penerima sampah organik.",
  },
  {
    id: "scan-2",
    name: "Botol Plastik",
    category: "Anorganik",
    image:
      "https://images.unsplash.com/photo-1604187351574-c75ca79f5807?auto=format&fit=crop&w=800&q=80",
    guidance:
      "Kosongkan dan bilas botol, lalu keringkan. Pisahkan tutupnya dan pipihkan sebelum disalurkan ke bank sampah.",
  },
  {
    id: "scan-3",
    name: "Botol Plastik",
    category: "Anorganik",
    image:
      "https://images.unsplash.com/photo-1604187351574-c75ca79f5807?auto=format&fit=crop&w=800&q=80",
    guidance:
      "Simpan botol yang sudah bersih di tempat kering dan kumpulkan bersama sampah plastik lainnya untuk didaur ulang.",
  },
];
const partnerImage =
  "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80";
export const partners: Partner[] = [
  {
    id: "mawar",
    name: "Bank Sampah Mawar",
    city: "Malang",
    distance: "0,7 km",
    description:
      "Fokus pada pengolahan sampah rumah tangga organik dan anorganik secara sistematis untuk lingkungan yang lebih bersih.",
    categories: ["Plastik", "Kertas", "Organik"],
    image: partnerImage,
  },
  {
    id: "hijau",
    name: "Bank Sampah Hijau",
    city: "Surabaya",
    distance: "1,2 km",
    description:
      "Mengelola sampah elektronik dan logam dengan program edukasi daur ulang komunitas.",
    categories: ["Logam", "Organik"],
    image: partnerImage,
  },
  {
    id: "ceria-1",
    name: "Bank Sampah Ceria",
    city: "Malang",
    distance: "0,9 km",
    description:
      "Menerima sampah plastik, kertas, dan organik dengan metode pemilahan ramah lingkungan.",
    categories: ["Plastik", "Kertas", "Organik"],
    image: partnerImage,
  },
  {
    id: "ceria-2",
    name: "Bank Sampah Ceria",
    city: "Malang",
    distance: "0,9 km",
    description:
      "Menerima sampah plastik, kertas, dan organik dengan metode pemilahan ramah lingkungan.",
    categories: ["Plastik", "Kertas", "Organik"],
    image: partnerImage,
  },
];

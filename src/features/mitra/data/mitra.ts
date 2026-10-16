export interface Mitra {
  id: string;
  name: string;
  city: string;
  distance: string;
  description: string;
  categories: string[];
  image: string;
  coordinates: [number, number];
}
const image =
  "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80";
export const mitraList: Mitra[] = [
  {
    id: "mawar",
    name: "Bank Sampah Mawar",
    city: "Malang",
    distance: "0,7 km",
    description:
      "Fokus pada pengolahan sampah rumah tangga organik dan anorganik secara sistematis untuk lingkungan yang lebih bersih.",
    categories: ["Plastik", "Kertas", "Organik"],
    image,
    coordinates: [112.6265, -7.9778],
  },
  {
    id: "hijau",
    name: "Bank Sampah Hijau",
    city: "Malang",
    distance: "1,2 km",
    description:
      "Mengelola sampah elektronik dan logam dengan program edukasi daur ulang komunitas.",
    categories: ["Logam", "Organik"],
    image,
    coordinates: [112.637, -7.966],
  },
  {
    id: "ceria-1",
    name: "Bank Sampah Ceria",
    city: "Malang",
    distance: "0,9 km",
    description:
      "Menerima sampah plastik, kertas, dan organik dengan metode pemilahan ramah lingkungan.",
    categories: ["Plastik", "Kertas", "Organik"],
    image,
    coordinates: [112.618, -7.969],
  },
  {
    id: "ceria-2",
    name: "Bank Sampah Ceria",
    city: "Malang",
    distance: "0,9 km",
    description:
      "Menerima sampah plastik, kertas, dan organik dengan metode pemilahan ramah lingkungan.",
    categories: ["Plastik", "Kertas", "Organik"],
    image,
    coordinates: [112.633, -7.987],
  },
];

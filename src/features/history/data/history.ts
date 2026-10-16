export interface HistoryScan {
  id: string;
  name: string;
  category: "Organik" | "Anorganik";
  period: "today" | "previous";
  image: string;
  guidance: string;
}

const photo = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=80`;

export const historyScans: HistoryScan[] = [
  {
    id: "today-1",
    name: "Kulit Sayur & Buah",
    category: "Organik",
    period: "today",
    image: photo("photo-1542838132-92c53300491e"),
    guidance:
      "Pisahkan dari kemasan, lalu potong kecil-kecil. Olah menjadi kompos atau salurkan kepada mitra penerima sampah organik.",
  },
  {
    id: "today-2",
    name: "Botol Plastik",
    category: "Anorganik",
    period: "today",
    image: photo("photo-1604187351574-c75ca79f5807"),
    guidance:
      "Kosongkan isi botol, bilas, dan keringkan. Pisahkan tutupnya sebelum disalurkan ke bank sampah.",
  },
  {
    id: "today-3",
    name: "Botol Plastik",
    category: "Anorganik",
    period: "today",
    image: photo("photo-1604187351574-c75ca79f5807"),
    guidance:
      "Pipihkan botol yang sudah bersih untuk menghemat tempat. Kumpulkan bersama plastik sejenis untuk didaur ulang.",
  },
  {
    id: "previous-1",
    name: "Kulit Sayur & Buah",
    category: "Organik",
    period: "previous",
    image: photo("photo-1542838132-92c53300491e"),
    guidance:
      "Sisa sayur dan buah dapat diolah menjadi kompos. Simpan terpisah dari sampah anorganik.",
  },
  {
    id: "previous-2",
    name: "Botol Plastik",
    category: "Anorganik",
    period: "previous",
    image: photo("photo-1602143407151-7111542de6e8"),
    guidance:
      "Bilas dan keringkan botol sebelum dipilah. Salurkan ke mitra daur ulang plastik terdekat.",
  },
  {
    id: "previous-3",
    name: "Kertas & Kardus",
    category: "Anorganik",
    period: "previous",
    image: photo("photo-1607082348824-0a96f2a4b9da"),
    guidance:
      "Jaga kertas dan kardus tetap kering. Lepaskan selotip, lipat kardus, lalu kumpulkan untuk didaur ulang.",
  },
  {
    id: "previous-4",
    name: "Daun Kering",
    category: "Organik",
    period: "previous",
    image: photo("photo-1507783548226-07c1cbe3e80d"),
    guidance:
      "Cacah daun kering dan campurkan dengan bahan organik basah untuk membuat kompos. Hindari membakar daun.",
  },
  {
    id: "previous-5",
    name: "Kaleng Bekas",
    category: "Anorganik",
    period: "previous",
    image: photo("photo-1532996122724-e3c354a0b15b"),
    guidance:
      "Bersihkan sisa makanan dari kaleng dan keringkan. Berhati-hatilah dengan bagian tepi yang tajam saat memilah.",
  },
  {
    id: "previous-6",
    name: "Botol Kaca",
    category: "Anorganik",
    period: "previous",
    image: photo("photo-1600585154340-be6161a56a0c"),
    guidance:
      "Pisahkan botol kaca berdasarkan warna jika memungkinkan. Simpan dengan aman agar tidak pecah sebelum disalurkan ke mitra.",
  },
];

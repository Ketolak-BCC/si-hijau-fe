import Navbar from "@/shared/components/Navbar";
import Hero from "@/features/home/components/Hero";
import CaraKerja from "@/features/home/components/CaraKerja";
import Keunggulan from "@/features/home/components/Keunggulan";

const HomeContainer = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <CaraKerja />
      <Keunggulan />
    </>
  );
};

export default HomeContainer;

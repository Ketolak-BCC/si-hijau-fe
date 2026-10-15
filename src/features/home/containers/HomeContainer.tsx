import Navbar from "@/shared/components/Navbar";
import Hero from "@/features/home/components/Hero";
import CaraKerja from "@/features/home/components/CaraKerja";
import Keunggulan from "@/features/home/components/Keunggulan";
import CTA from "@/features/home/components/CTA";

const HomeContainer = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <CaraKerja />
      <Keunggulan />
      <CTA />
    </>
  );
};

export default HomeContainer;

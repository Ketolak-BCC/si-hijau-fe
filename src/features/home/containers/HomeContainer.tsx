import Navbar from "@/shared/components/Navbar";
import Hero from "@/features/home/components/Hero";
import CaraKerja from "@/features/home/components/CaraKerja";
import Keunggulan from "@/features/home/components/Keunggulan";
import CTA from "@/features/home/components/CTA";
import Footer from "@/shared/components/Footer";

const HomeContainer = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <CaraKerja />
      <Keunggulan />
      <CTA />
      <Footer />
    </>
  );
};

export default HomeContainer;

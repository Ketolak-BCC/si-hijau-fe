import Navbar from "@/shared/components/Navbar";
import EmailInput from "../components/EmailInput";

const ForgotPWContainer = () => {
  return (
    <section className="relative isolate flex min-h-svh items-center justify-center bg-neutral-50 px-6 py-28 md:py-32">
      <div className="absolute inset-x-0 top-0 z-10 overflow-x-auto">
        <Navbar />
      </div>
      <div className="w-full max-w-[440px]">
        <EmailInput />
      </div>
    </section>
  );
};

export default ForgotPWContainer;

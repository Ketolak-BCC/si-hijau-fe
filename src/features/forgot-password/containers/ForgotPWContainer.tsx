import Navbar from "@/shared/components/Navbar";
import EmailInput from "../components/EmailInput";

const ForgotPWContainer = () => {
  return (
    <section className="relative isolate flex min-h-svh items-center justify-center bg-neutral-50 px-12 py-32">
      <div className="absolute inset-x-0 top-0 z-10 overflow-x-auto">
        <Navbar />
      </div>
      <EmailInput />
    </section>
  );
};

export default ForgotPWContainer;

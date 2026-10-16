"use client";

import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/shared/components/ui/button";
import { Field } from "@/shared/components/ui/field";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";

const EmailInput = () => {
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    router.push("/verifikasi-otp");
  };

  return (
    <div className="w-full text-black">
      <Link
        href="/masuk"
        aria-label="Kembali ke halaman masuk"
        className="font-jakarta-500 mb-6 inline-flex items-center gap-1.5 text-sm text-neutral-600 transition-colors hover:text-neutral-900"
      >
        <ChevronLeft className="size-4" aria-hidden="true" />
        <span>Kembali ke Masuk</span>
      </Link>

      <h1 className="font-jakarta-700 text-2xl text-neutral-900 md:text-[28px]">
        Lupa Password?
      </h1>
      <p
        id="forgot-password-description"
        className="font-jakarta-400 mt-2 text-sm text-neutral-600 md:text-base"
      >
        Masukkan email yang terdaftar di akun kamu untuk menerima kode OTP.
      </p>

      <form
        className="mt-6 flex flex-col gap-4"
        aria-describedby="forgot-password-description"
        onSubmit={handleSubmit}
      >
        <Field className="flex flex-col gap-2">
          <Label
            htmlFor="forgot-password-email"
            className="font-jakarta-600 text-[16px]"
          >
            Email
          </Label>
          <Input
            id="forgot-password-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Masukkan email kamu"
            required
            className="h-12 rounded-xl border-green-light-active border-2 bg-white px-4 text-base"
          />
        </Field>
        <Button
          type="submit"
          className="mt-2 h-12 w-full rounded-xl text-base font-semibold text-white"
        >
          Kirim OTP
        </Button>
      </form>
    </div>
  );
};

export default EmailInput;


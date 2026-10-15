"use client";

import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/shared/components/ui/button";
import { Field } from "@/shared/components/ui/field";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";

const EmailInput = () => {
  return (
    <div className="relative w-full max-w-[305px] text-black">
      <Link
        href="/masuk"
        aria-label="Kembali ke halaman masuk"
        className="focus-visible:outline-green-normal absolute top-3 -left-9 flex size-6 items-center justify-center rounded-md focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        <ChevronLeft className="size-4" aria-hidden="true" />
      </Link>

      <h1 className="text-lg leading-6 font-semibold">Lupa Password?</h1>
      <p id="forgot-password-description" className="mt-2 text-xs leading-4">
        Masukkan email yang terdaftar di akun kamu untuk menerima kode OTP.
      </p>

      <form
        className="mt-8"
        aria-describedby="forgot-password-description"
        onSubmit={(event) => event.preventDefault()}
      >
        <Field className="gap-1!">
          <Label
            htmlFor="forgot-password-email"
            className="text-xs! leading-4! font-normal!"
          >
            Email
          </Label>
          <Input
            id="forgot-password-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Placeholder"
            required
            className="border-green-light-active! focus-visible:border-green-normal focus-visible:ring-green-normal/30 h-[30px]! w-full rounded-lg! border bg-white! px-2.5! py-0! text-xs! placeholder:text-[9px] placeholder:text-neutral-500/60"
          />
        </Field>
        <Button
          type="submit"
          className="hover:bg-green-normal-hover mt-[18px] h-[31px]! w-full rounded-lg! text-[9px]! text-white"
        >
          Kirim OTP
        </Button>
      </form>
    </div>
  );
};

export default EmailInput;

"use client";

import { ChevronLeft } from "lucide-react";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import Link from "next/link";
import { Button } from "@/shared/components/ui/button";
import { Field } from "@/shared/components/ui/field";
import { Label } from "@/shared/components/ui/label";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/shared/components/ui/input-otp";

const OTPInput = () => {
  return (
    <div className="w-full text-black">
      <Link
        href="/lupa-password"
        aria-label="Kembali ke halaman lupa password"
        className="font-jakarta-500 mb-6 inline-flex items-center gap-1.5 text-sm text-neutral-600 transition-colors hover:text-neutral-900"
      >
        <ChevronLeft className="size-4" aria-hidden="true" />
        <span>Kembali ke Lupa Password</span>
      </Link>

      <h1 className="font-jakarta-700 text-2xl text-neutral-900 md:text-[28px]">
        Konfirmasi OTP
      </h1>
      <p
        id="otp-description"
        className="font-jakarta-400 mt-2 text-sm text-neutral-600 md:text-base"
      >
        OTP telah dikirimkan ke email{" "}
        <span className="font-semibold text-neutral-800">xxxx@gmail.com</span>
      </p>

      <form
        className="mt-8 flex flex-col gap-6"
        onSubmit={(event) => event.preventDefault()}
      >
        <Field className="flex flex-col gap-3">
          <Label
            htmlFor="verification-otp"
            className="font-jakarta-600 text-[16px]"
          >
            Kode Verifikasi
          </Label>
          <InputOTP
            id="verification-otp"
            maxLength={6}
            minLength={6}
            pattern={REGEXP_ONLY_DIGITS}
            inputMode="numeric"
            autoComplete="one-time-code"
            name="otp"
            aria-describedby="otp-description"
            required
            containerClassName="w-full justify-center"
          >
            <InputOTPGroup className="w-full justify-between gap-2 sm:gap-3">
              {Array.from({ length: 6 }, (_, index) => (
                <InputOTPSlot
                  key={index}
                  index={index}
                  className="size-12 rounded-xl border-2 border-green-light-active bg-white text-xl font-bold transition-all data-[active=true]:border-green-normal data-[active=true]:ring-2 data-[active=true]:ring-green-normal/20 sm:size-14"
                />
              ))}
            </InputOTPGroup>
          </InputOTP>
        </Field>

        <Button
          type="submit"
          className="mt-2 h-12 w-full rounded-xl text-base font-semibold text-white"
        >
          Konfirmasi OTP
        </Button>

        <p className="text-center font-jakarta-500 text-sm text-neutral-600">
          Belum menerima kode?{" "}
          <button
            type="button"
            className="cursor-pointer font-semibold text-green-normal underline hover:text-green-normal-hover"
          >
            Kirim Ulang
          </button>
        </p>
      </form>
    </div>
  );
};

export default OTPInput;


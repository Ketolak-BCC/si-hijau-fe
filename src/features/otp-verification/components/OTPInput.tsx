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
    <div className="relative w-full max-w-[292px] text-black">
      <Link
        href="/lupa-password"
        aria-label="Kembali ke halaman lupa password"
        className="focus-visible:outline-green-normal absolute top-2 -left-9 flex size-6 items-center justify-center rounded-md focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        <ChevronLeft className="size-4" aria-hidden="true" />
      </Link>

      <h1 className="text-lg leading-6 font-semibold">Konfirmasi OTP</h1>
      <p id="otp-description" className="mt-2 text-xs leading-4">
        OTP telah dikirimkan ke email xxxx@gmail.com
      </p>

      <form className="mt-[30px]" onSubmit={(event) => event.preventDefault()}>
        <Field>
          <Label htmlFor="verification-otp" className="sr-only">
            Kode OTP 6 digit
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
            containerClassName="w-full"
          >
            <InputOTPGroup className="w-full gap-[5px]">
              {Array.from({ length: 6 }, (_, index) => (
                <InputOTPSlot
                  key={index}
                  index={index}
                  className="border-green-light-active! data-[active=true]:border-green-normal data-[active=true]:ring-green-normal/20 h-[31px]! w-full! rounded-lg! border! bg-white!"
                />
              ))}
            </InputOTPGroup>
          </InputOTP>
        </Field>

        <Button
          type="submit"
          className="hover:bg-green-normal-hover mt-[17px] h-[31px]! w-full rounded-lg! text-[9px]! text-white"
        >
          Konfirmasi OTP
        </Button>
      </form>
    </div>
  );
};

export default OTPInput;

import { Label } from "@/shared/components/ui/label";
import { Field } from "@/shared/components/ui/field";
import { Input } from "@/shared/components/ui/input";
import Link from "next/link";
import { Button } from "@/shared/components/ui/button";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

const loginInput = () => {
  return (
    <section className="grid h-screen grid-cols-2 bg-neutral-50">
      <div className="relative">
        <Image
          src="/auth-image.webp"
          alt="auth image"
          width={720}
          height={1024}
          className="h-screen w-full object-cover"
        />
        <div className="absolute bottom-8 left-8 flex items-center gap-2">
          <Image
            src="logo-white.svg"
            alt="SiHijau Logo"
            width={24}
            height={24}
            className="size-8 lg:size-10"
          />
          <h1 className="font-jakarta-700 text-[28px] text-neutral-50">
            SiHijau
          </h1>
        </div>
      </div>
      <div className="relative flex items-center justify-center px-16">
        <Link
          href="/"
          className="font-jakarta-500 absolute top-8 left-8 flex items-center gap-1 underline"
        >
          <ArrowLeft size={24} className="size-3 stroke-3" />
          Kembali ke Beranda
        </Link>
        <div className="flex w-full flex-col gap-14">
          <div className="flex flex-col gap-4 text-center">
            <h1 className="font-jakarta-700 text-[32px]">Masuk</h1>
            <p className="font-jakarta-500 text-[20px]">
              Belum punya akun?{" "}
              <Link href="/daftar" className="cursor-pointer underline">
                Daftar
              </Link>
            </p>
          </div>
          <div className="flex w-full flex-col gap-8">
            <form className="flex flex-col gap-4">
              <Field className="flex flex-col gap-2">
                <Label htmlFor="email" className="font-jakarta-600 text-[20px]">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Masukkan email"
                  className="border-green-light-active border-2 bg-white"
                  required
                />
              </Field>
              <Field className="flex flex-col gap-2">
                <Label
                  htmlFor="password"
                  className="font-jakarta-600 text-[20px]"
                >
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Masukkan password"
                  className="border-green-light-active border-2 bg-white"
                  required
                />
              </Field>
              <Link href="/" className="font-jakarta-400 underline">
                Lupa Password
              </Link>
            </form>
            <div className="flex flex-col gap-12">
              <Button>Masuk</Button>
              <Button variant="outline">Masuk dengan Google</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default loginInput;

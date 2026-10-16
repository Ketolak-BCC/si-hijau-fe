"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Loader2 } from "lucide-react";
import { Label } from "@/shared/components/ui/label";
import { Field } from "@/shared/components/ui/field";
import { Input } from "@/shared/components/ui/input";
import { Button } from "@/shared/components/ui/button";
import { useAuthStore } from "@/shared/stores/authStore";
import { authService } from "@/shared/api/auth";
import { getApiErrorMessage } from "@/lib/axios";

const LoginInput = () => {
  const router = useRouter();
  const login = useAuthStore((state) => state.login);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setIsLoading(true);

    try {
      await login({ username: email, password });
      router.push("/");
    } catch (error) {
      setErrorMessage(getApiErrorMessage(error));
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setErrorMessage(null);
    setIsGoogleLoading(true);

    try {
      const { authorization_url } = await authService.getGoogleAuthUrl();
      if (authorization_url) {
        window.location.href = authorization_url;
      }
    } catch {
      try {
        await authService.loginWithGoogleDevMock();
        router.push("/");
      } catch (devError) {
        setErrorMessage(getApiErrorMessage(devError));
      }
    } finally {
      setIsGoogleLoading(false);
    }
  };

  return (
    <section className="grid min-h-screen grid-cols-1 bg-neutral-50 md:grid-cols-2">
      <div className="relative hidden h-full min-h-screen md:block">
        <Image
          src="/auth-image.webp"
          alt="auth image"
          fill
          priority
          sizes="50vw"
          className="object-cover"
        />
        <div className="absolute bottom-8 left-8 z-10 flex items-center gap-2">
          <Image
            src="/logo-white.svg"
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

      <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-y-auto px-6 py-16 sm:px-12 lg:px-16">
        <Link
          href="/"
          className="font-jakarta-500 hover:text-green-normal absolute top-6 left-6 z-20 flex items-center gap-1.5 text-sm text-neutral-600 underline transition-colors lg:top-8 lg:left-8"
        >
          <ArrowLeft className="size-4 stroke-2" />
          Kembali ke Beranda
        </Link>

        <div className="my-auto flex w-full max-w-[440px] flex-col gap-6 py-4">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="font-jakarta-700 text-[32px] text-neutral-900">
              Masuk
            </h1>
            <p className="font-jakarta-500 text-base text-neutral-600">
              Belum punya akun?{" "}
              <Link
                href="/daftar"
                className="text-green-normal cursor-pointer font-semibold underline"
              >
                Daftar
              </Link>
            </p>
          </div>

          {errorMessage && (
            <div className="rounded-xl border border-red-200 bg-red-50 p-3.5 text-sm text-red-600">
              {errorMessage}
            </div>
          )}

          <div className="flex w-full flex-col gap-5">
            <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
              <Field className="flex flex-col gap-1.5">
                <Label htmlFor="email" className="font-jakarta-600 text-[16px]">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Masukkan email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-green-light-active h-11 rounded-xl border-2 bg-white px-4 text-base"
                  required
                />
              </Field>

              <Field className="flex flex-col gap-1.5">
                <Label
                  htmlFor="password"
                  className="font-jakarta-600 text-[16px]"
                >
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Masukkan password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-green-light-active h-11 rounded-xl border-2 bg-white px-4 text-base"
                  required
                />
              </Field>

              <div className="flex justify-start">
                <Link
                  href="/lupa-password"
                  className="font-jakarta-400 hover:text-green-normal text-sm text-neutral-600 underline transition-colors"
                >
                  Lupa Password?
                </Link>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="mt-2 h-11 cursor-pointer rounded-xl text-base font-semibold text-white"
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="size-4 animate-spin" />
                    Memproses...
                  </span>
                ) : (
                  "Masuk"
                )}
              </Button>
            </form>

            <div className="relative my-0.5 text-center text-xs text-neutral-400 after:absolute after:top-1/2 after:left-0 after:-z-10 after:h-px after:w-full after:bg-neutral-200">
              <span className="bg-neutral-50 px-3">atau</span>
            </div>

            <Button
              type="button"
              variant="outline"
              disabled={isGoogleLoading}
              onClick={handleGoogleLogin}
              className="h-11 cursor-pointer rounded-xl text-base font-medium"
            >
              {isGoogleLoading ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="size-4 animate-spin" />
                  Menghubungkan...
                </span>
              ) : (
                "Masuk dengan Google"
              )}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginInput;

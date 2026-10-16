"use client";
import { useRef } from "react";
import { X } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
export default function DetailDialog({
  title,
  children,
  label = "Lihat Detail",
  primary = false,
}: {
  title: string;
  children: React.ReactNode;
  label?: string;
  primary?: boolean;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  return (
    <>
      <Button
        variant={primary ? "default" : "outline"}
        className="w-full rounded-xl"
        onClick={() => dialog.current?.showModal()}
      >
        {label}
      </Button>
      <dialog
        ref={dialog}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
        className="text-green-normal fixed inset-0 m-auto max-h-[85dvh] w-[calc(100%-2rem)] max-w-lg overflow-y-auto rounded-2xl border p-6 shadow-xl backdrop:bg-black/40"
      >
        <div className="mb-5 flex items-center justify-between gap-4">
          <h3 className="font-jakarta-700 text-xl">{title}</h3>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Tutup detail"
            onClick={() => dialog.current?.close()}
          >
            <X />
          </Button>
        </div>
        <div className="text-sm leading-relaxed">{children}</div>
      </dialog>
    </>
  );
}

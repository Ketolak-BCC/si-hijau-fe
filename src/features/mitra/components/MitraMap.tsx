"use client";
import { MapPin } from "lucide-react";
import {
  Map,
  MapControls,
  MapMarker,
  MarkerContent,
  MarkerTooltip,
} from "@/shared/components/ui/map";
import type { Mitra } from "../data/mitra";
export default function MitraMap({
  partners,
  selected,
  onSelect,
}: {
  partners: Mitra[];
  selected: Mitra | null;
  onSelect: (mitra: Mitra) => void;
}) {
  return (
    <Map theme="light" center={[112.627, -7.977]} zoom={12.5}>
      <MapControls position="bottom-left" />
      {partners.map((partner) => (
        <MapMarker
          key={partner.id}
          longitude={partner.coordinates[0]}
          latitude={partner.coordinates[1]}
        >
          <MarkerContent>
            <button
              type="button"
              aria-label={`Lihat ${partner.name}`}
              aria-pressed={selected?.id === partner.id}
              onClick={() => onSelect(partner)}
              className={`focus-visible:outline-green-normal flex size-9 items-center justify-center rounded-full border-2 border-white text-white shadow-md transition-transform hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 ${selected?.id === partner.id ? "bg-warning-700" : "bg-green-normal"}`}
            >
              <MapPin className="size-5" />
            </button>
          </MarkerContent>
          <MarkerTooltip>{partner.name}</MarkerTooltip>
        </MapMarker>
      ))}
    </Map>
  );
}

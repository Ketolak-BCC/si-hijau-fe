import { partners } from "../data/dashboard";
import DashboardSection from "./DashboardSection";
import PartnerCard from "./PartnerCard";
export default function PartnersSection() {
  return (
    <DashboardSection title="Jelajah Mitra">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {partners.map((partner) => (
          <PartnerCard key={partner.id} partner={partner} />
        ))}
      </div>
    </DashboardSection>
  );
}

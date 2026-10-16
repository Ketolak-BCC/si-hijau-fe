import { recentScans } from "../data/dashboard";
import DashboardSection from "./DashboardSection";
import ContributionBanner from "./ContributionBanner";
import ScanCard from "./ScanCard";
export default function RecentScansSection() {
  return (
    <DashboardSection title="Cek Scan Terbaru Kamu">
      <ContributionBanner />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {recentScans.map((scan) => (
          <ScanCard key={scan.id} scan={scan} />
        ))}
      </div>
    </DashboardSection>
  );
}

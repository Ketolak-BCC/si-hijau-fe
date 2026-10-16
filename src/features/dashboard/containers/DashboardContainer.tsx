import DashboardHeader from "../components/DashboardHeader";
import PointsCard from "../components/PointsCard";
import RecentScansSection from "../components/RecentScansSection";
import PartnersSection from "../components/PartnersSection";
import { dashboardSummary } from "../data/dashboard";
export default function DashboardContainer() {
  return (
    <div className="font-jakarta-400 min-h-screen bg-neutral-50 px-5 py-8 text-neutral-700 sm:px-8 lg:px-10 xl:px-16">
      <div className="mx-auto max-w-6xl space-y-8">
        <DashboardHeader name={dashboardSummary.name} />
        <PointsCard
          points={dashboardSummary.points}
          managedWaste={dashboardSummary.managedWaste}
        />
        <RecentScansSection />
        <PartnersSection />
      </div>
    </div>
  );
}

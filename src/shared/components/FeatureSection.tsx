export default function FeatureSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-5">
      <h2 className="font-jakarta-700 text-green-normal text-lg">
        <span className="bg-green-light px-2 py-0.5">{title}</span>
      </h2>
      {children}
    </section>
  );
}

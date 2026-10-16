export default function CategoryBadge({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <span className="bg-green-light text-green-normal inline-flex rounded-full px-3 py-1 text-xs">
      {children}
    </span>
  );
}

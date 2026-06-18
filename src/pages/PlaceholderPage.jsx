export default function PlaceholderPage({ title }) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-[#0f2862] mb-4">{title}</h1>
        <p className="text-gray-500">This page is currently under construction. Check back soon!</p>
      </div>
    </div>
  );
}
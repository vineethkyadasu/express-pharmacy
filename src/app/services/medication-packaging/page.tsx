// src/app/services/medication-packaging/page.tsx
export const metadata = {
  title: "Medication Packaging — Express Pharmacy",
  description: "Organized blister packs to help you stay on track with your medications.",
};

export default function MedicationPackagingPage() {
  return (
    <main className="min-h-screen">
      <header className="bg-blue-900 text-white py-10">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold">Medication Packaging</h1>
          <p className="mt-2 text-blue-100">
            Simplify your medication routine with custom packaging solutions.
          </p>
        </div>
      </header>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <p>
            Staying on track with multiple medications can be overwhelming. Our <b>Medication Packaging</b> service 
            provides easy-to-use blister packs with clearly labeled doses.
          </p>

          <h2 className="text-xl font-semibold text-blue-900">Why Choose This Service?</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Pre-sorted daily doses</li>
            <li>Reduces missed or double doses</li>
            <li>Ideal for caregivers and seniors</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
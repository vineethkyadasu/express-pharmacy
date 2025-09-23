// src/app/services/medical-supplies/page.tsx
export const metadata = {
  title: "Medical Supplies — Express Pharmacy",
  description: "Quality medical supplies and durable equipment available at Express Pharmacy.",
};

export default function MedicalSuppliesPage() {
  return (
    <main className="min-h-screen">
      <header className="bg-blue-900 text-white py-10">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold">Medical Supplies</h1>
          <p className="mt-2 text-blue-100">
            Durable medical equipment and supplies for everyday needs.
          </p>
        </div>
      </header>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <p>
            At Express Pharmacy, we carry a wide range of <b>medical supplies</b> to support your health and wellness needs. 
            From daily living aids to mobility equipment, we’ve got you covered.
          </p>

          <h2 className="text-xl font-semibold text-blue-900">Available Supplies</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Blood pressure monitors</li>
            <li>Diabetic testing supplies</li>
            <li>Mobility aids (walkers, canes)</li>
            <li>Bathroom safety equipment</li>
            <li>Compression stockings</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
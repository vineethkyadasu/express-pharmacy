// src/app/services/medication-therapy-management/page.tsx
export const metadata = {
  title: "Medication Therapy Management — Express Pharmacy",
  description: "Comprehensive medication reviews with Express Pharmacy pharmacists.",
};

export default function MedicationTherapyPage() {
  return (
    <main className="min-h-screen">
      <header className="bg-blue-900 text-white py-10">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold">Medication Therapy Management</h1>
          <p className="mt-2 text-blue-100">
            One-on-one consultations to optimize your medication plan.
          </p>
        </div>
      </header>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <p>
            Our pharmacists provide <b>Medication Therapy Management (MTM)</b> services to review all of your prescriptions, 
            over-the-counter medications, and supplements to ensure they work well together.
          </p>

          <h2 className="text-xl font-semibold text-blue-900">How It Helps</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Identify drug interactions</li>
            <li>Improve treatment outcomes</li>
            <li>Personalized medication guidance</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
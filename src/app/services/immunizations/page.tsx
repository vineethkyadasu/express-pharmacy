// src/app/services/immunizations/page.tsx
export const metadata = {
  title: "Immunizations — Express Pharmacy",
  description: "Protect your health with our pharmacy immunization services.",
};

export default function ImmunizationsPage() {
  return (
    <main className="min-h-screen">
      <header className="bg-blue-900 text-white py-10">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold">Immunizations</h1>
          <p className="mt-2 text-blue-100">
            Convenient vaccines available at Express Pharmacy.
          </p>
        </div>
      </header>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <p>
            Staying up to date on vaccines is one of the best ways to protect yourself and your loved ones.  
            At Express Pharmacy, our licensed pharmacists administer a variety of vaccines in a safe and welcoming environment.
          </p>

          <h2 className="text-xl font-semibold text-blue-900">Available Vaccines</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Flu (Influenza)</li>
            <li>Pneumonia</li>
            <li>Shingles</li>
            <li>COVID-19</li>
            <li>Travel vaccines (select)</li>
          </ul>

          <p>
            Walk in during business hours or call ahead to schedule your vaccination today.
          </p>
        </div>
      </section>
    </main>
  );
}
// src/app/services/medication-synchronization/page.tsx
export const metadata = {
  title: "Medication Synchronization — Express Pharmacy",
  description: "Simplify your refills with synchronized pick-up dates at Express Pharmacy.",
};

export default function MedicationSyncPage() {
  return (
    <main className="min-h-screen">
      <header className="bg-blue-900 text-white py-10">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold">Medication Synchronization</h1>
          <p className="mt-2 text-blue-100">
            Pick up all your medications on the same day each month.
          </p>
        </div>
      </header>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <p>
            Managing multiple prescriptions can be stressful. With our <b>Medication Synchronization</b> service, 
            we coordinate your refills so all your medications are ready for pick-up on the same day each month.
          </p>

          <h2 className="text-xl font-semibold text-blue-900">Benefits</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Fewer trips to the pharmacy</li>
            <li>Improved medication adherence</li>
            <li>Convenient scheduling</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
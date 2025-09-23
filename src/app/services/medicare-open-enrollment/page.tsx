// src/app/services/medicare-open-enrollment/page.tsx
export const metadata = {
  title: "Medicare Open Enrollment — Express Pharmacy",
  description: "Get help reviewing your Medicare Part D plan during open enrollment.",
};

export default function MedicarePage() {
  return (
    <main className="min-h-screen">
      <header className="bg-blue-900 text-white py-10">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold">Medicare Open Enrollment</h1>
          <p className="mt-2 text-blue-100">
            Expert assistance with your Medicare Part D plan selection.
          </p>
        </div>
      </header>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <p>
            Choosing the right <b>Medicare Part D</b> plan can save you money and ensure your medications are covered. 
            Our pharmacy team provides free consultations during open enrollment to help you compare options.
          </p>

          <h2 className="text-xl font-semibold text-blue-900">What We Offer</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Plan comparison assistance</li>
            <li>Personalized recommendations</li>
            <li>Guidance on prescription coverage</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
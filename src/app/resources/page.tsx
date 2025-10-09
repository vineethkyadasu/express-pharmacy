export default function ResourcesPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-blue-900 mb-6 text-center">
        Resources
      </h1>
      <p className="text-gray-700 leading-relaxed text-center max-w-3xl mx-auto mb-10">
        At Express Pharmacy, we are committed to keeping our patients informed and empowered.
        Explore helpful health resources, guides, and downloadable forms to manage your wellness better.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Educational Resources */}
        <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">
            Educational Resources
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li>💊 Medication Management Tips</li>
            <li>🍎 Nutrition & Lifestyle Guidance</li>
            <li>🩺 Preventive Healthcare Guidelines</li>
            <li>💉 Immunization Awareness</li>
          </ul>
        </div>

        {/* Downloadable Forms */}
        <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">
            Downloadable Forms
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li>
              📝 <a href="#" className="hover:text-blue-600">New Patient Registration Form</a>
            </li>
            <li>
              📄 <a href="#" className="hover:text-blue-600">Prescription Transfer Form</a>
            </li>
            <li>
              🏥 <a href="#" className="hover:text-blue-600">Insurance Information Sheet</a>
            </li>
          </ul>
        </div>

        {/* Health Tools */}
        <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition md:col-span-2">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">
            Helpful Health Tools
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li>💧 BMI Calculator</li>
            <li>💊 Drug Interaction Checker</li>
            <li>📅 Pill Reminder Apps</li>
            <li>🧠 Mental Health Support Links</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
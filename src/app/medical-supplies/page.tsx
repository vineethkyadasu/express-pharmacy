export default function MedicalSuppliesPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-blue-900 mb-6 text-center">
        Medical Supplies
      </h1>
      <p className="text-gray-700 leading-relaxed text-center max-w-3xl mx-auto mb-10">
        At Express Pharmacy, we provide a range of high-quality medical supplies to meet your healthcare needs.
        From mobility aids to daily wellness essentials, we ensure that our patients have easy access to
        trusted and affordable products.
      </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {[
          {
            title: "Mobility Aids",
            desc: "Walkers, canes, and wheelchairs for better mobility and comfort.",
          },
          {
            title: "Blood Pressure Monitors",
            desc: "Accurate, easy-to-use monitors for tracking your heart health.",
          },
          {
            title: "Diabetic Supplies",
            desc: "Glucose meters, test strips, and insulin supplies at competitive prices.",
          },
          {
            title: "First Aid Essentials",
            desc: "Bandages, antiseptics, and wound-care kits for home and travel.",
          },
          {
            title: "Compression Stockings",
            desc: "Improves blood circulation and reduces swelling for daily wellness.",
          },
          {
            title: "Respiratory Care",
            desc: "Nebulizers, masks, and accessories to support breathing therapy.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white shadow-md rounded-xl p-6 border border-gray-100 hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold text-blue-900 mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
"use client";

import {
  Activity,
  Heart,
  BriefcaseMedical,
  Stethoscope,
  Wind,
  Accessibility,
} from "lucide-react";

const supplies = [
  {
    title: "Mobility Aids",
    desc: "Walkers, canes, and wheelchairs for better mobility and comfort.",
    icon: Accessibility,
  },
  {
    title: "Blood Pressure Monitors",
    desc: "Accurate, easy-to-use monitors for tracking your heart health.",
    icon: Heart,
  },
  {
    title: "Diabetic Supplies",
    desc: "Glucose meters, test strips, and insulin supplies at competitive prices.",
    icon: Stethoscope,
  },
  {
    title: "First Aid Essentials",
    desc: "Bandages, antiseptics, and wound-care kits for home and travel.",
    icon: BriefcaseMedical,
  },
  {
    title: "Compression Stockings",
    desc: "Improves blood circulation and reduces swelling for daily wellness.",
    icon: Activity,
  },
  {
    title: "Respiratory Care",
    desc: "Nebulizers, masks, and accessories to support breathing therapy.",
    icon: Wind,
  },
];

export default function MedicalSuppliesPage() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
          Medical Supplies
        </h1>
        <p className="text-gray-700 leading-relaxed text-lg max-w-3xl mx-auto mb-14">
          At <span className="font-semibold text-red-600">Express Pharmacy</span>, we provide a range of
          high-quality medical supplies to meet your healthcare needs. From mobility aids to daily wellness
          essentials, we ensure our patients have easy access to trusted and affordable products.
        </p>

        {/* Grid of Supplies */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {supplies.map((item, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-2xl p-8 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="bg-red-100 p-4 rounded-full mb-4">
                <item.icon className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16">
          <p className="text-gray-700 text-lg mb-6">
            Need help finding the right product for your care?
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition"
          >
            Contact Our Pharmacy
          </a>
        </div>
      </div>
    </section>
  );
}

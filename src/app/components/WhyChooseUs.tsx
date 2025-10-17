"use client";

import { ThumbsUp, DollarSign, Users } from "lucide-react";

const highlights = [
  {
    title: "Fast & Reliable",
    description:
      "No long waits — we ensure quick, dependable service for every prescription.",
    icon: ThumbsUp,
  },
  {
    title: "Affordable Options",
    description:
      "$4 Generics, Medicare, Medicaid, and all major insurances accepted.",
    icon: DollarSign,
  },
  {
    title: "Community Focused",
    description:
      "Proudly serving Somerset, NJ with personalized care and attention.",
    icon: Users,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
          Why Choose <span className="text-red-600">Express Pharmacy?</span>
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-12">
          We go beyond prescriptions — providing trusted care, affordable
          solutions, and a community-first approach that makes a difference in
          your health journey.
        </p>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center border border-gray-100"
            >
              <div className="bg-red-100 p-4 rounded-full mb-4">
                <item.icon className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-900">
                {item.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { ThumbsUp, DollarSign, Users } from "lucide-react";

const highlights = [
  {
    title: "Fast & Reliable",
    description: "No long waits — we ensure quick, dependable service for every prescription.",
    icon: ThumbsUp,
  },
  {
    title: "Affordable Options",
    description: "$4 Generics, Medicare, Medicaid, and all major insurances accepted.",
    icon: DollarSign,
  },
  {
    title: "Community Focused",
    description: "Proudly serving Somerset, NJ with personalized care and attention.",
    icon: Users,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-blue-900">
          Why Choose Express Pharmacy?
        </h2>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="bg-gray-50 rounded-xl shadow-sm p-6 hover:shadow-md transition flex flex-col items-center"
            >
              <item.icon className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
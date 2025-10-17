"use client";

import Link from "next/link";
import { Truck, ShieldCheck, Syringe, FileCheck, Clock, User, FileText, Stethoscope, Stamp } from "lucide-react";

const allServices = [
  {
    name: "Prescription Medications",
    description: "Get accurate and timely medications prescribed by your doctor.",
    icon: FileText,
  },
  {
    name: "Immunizations",
    description: "Stay protected with vaccines for flu, COVID-19, and more.",
    icon: Syringe,
  },
  {
    name: "Vitamins / Supplements",
    description: "Boost your health with quality vitamins and supplements.",
    icon: Stethoscope,
  },
  {
    name: "OTC Drugs",
    description: "Find over-the-counter medicines for everyday relief.",
    icon: ShieldCheck,
  },
  {
    name: "Surgical Supplies",
    description: "We provide a wide range of essential surgical items.",
    icon: FileCheck,
  },
  {
    name: "DME (Durable Medical Equipment)",
    description: "Medical equipment to support long-term care and recovery.",
    icon: Truck,
  },
  {
    name: "Diabetic Supplies",
    description: "All diabetic management products in one place.",
    icon: User,
  },
  {
    name: "E-Prescribing",
    description: "Quick and easy digital prescription processing.",
    icon: FileText,
  },
  {
    name: "Pharmacist Consultation",
    description: "Personalized advice from expert pharmacists.",
    icon: Stethoscope,
  },
  {
    name: "Delivery Service",
    description: "Fast, free delivery of all your prescriptions.",
    icon: Truck,
  },
  {
    name: "Patient Counseling",
    description: "We help you understand your medication and health goals.",
    icon: User,
  },
];

// show only first 6 services on homepage
const homeServices = allServices.slice(0, 6);

export default function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-blue-900">
          Our Services
        </h2>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {homeServices.map((service) => (
            <div
              key={service.name}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition"
            >
              <service.icon className="h-12 w-12 text-blue-900 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-blue-900">{service.name}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12">
          <Link
            href="/services"
            className="inline-block px-6 py-3 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}

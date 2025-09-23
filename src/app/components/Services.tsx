"use client";

import { Truck, ShieldCheck, Syringe, FileCheck, Clock, User, FileText, Stethoscope, Stamp } from "lucide-react";

const services = [
  {
    name: "Free Delivery",
    description: "Get your prescriptions delivered right to your doorstep at no extra cost.",
    icon: Truck,
  },
  {
    name: "Insurance Accepted",
    description: "We accept all major insurances including Medicare and Medicaid.",
    icon: ShieldCheck,
  },
  {
    name: "Workers Comp",
    description: "Fast, hassle-free prescriptions for workers’ compensation cases.",
    icon: FileCheck,
  },
  {
    name: "No Waiting Time",
    description: "Skip the long lines — quick service, every time.",
    icon: Clock,
  },
  {
    name: "Senior Discounts",
    description: "Special pricing and care options for senior citizens.",
    icon: User,
  },
  {
    name: "Prescription Consolidation",
    description: "Easily manage multiple prescriptions in one place.",
    icon: FileText,
  },
  {
    name: "Vaccines & Flu Shots",
    description: "Stay protected with a variety of immunizations available.",
    icon: Syringe,
  },
  {
    name: "Notary Services",
    description: "Certified notary services available in-store.",
    icon: Stamp,
  },
  {
    name: "$4 Generics",
    description: "Affordable generic medications starting at just $4.",
    icon: Stethoscope,
  },
];

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
          {services.map((service) => (
            <div
              key={service.name}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition"
            >
              <service.icon className="h-12 w-12 text-blue-900 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
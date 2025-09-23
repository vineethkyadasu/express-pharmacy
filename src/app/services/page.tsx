"use client";

import Link from "next/link";
import {
  Syringe,
  CalendarCheck,
  ClipboardCheck,
  Package,
  Stethoscope,
  HeartPulse,
} from "lucide-react";

const services = [
  {
    title: "Immunizations",
    description: "Protect yourself and your family with our range of vaccines.",
    icon: Syringe,
    link: "/services/immunizations",
  },
  {
    title: "Medication Synchronization",
    description: "Pick up all your prescriptions on the same day each month.",
    icon: CalendarCheck,
    link: "/services/medication-synchronization",
  },
  {
    title: "Medication Therapy Management",
    description: "Personalized reviews to optimize your treatment plan.",
    icon: ClipboardCheck,
    link: "/services/medication-therapy-management",
  },
  {
    title: "Medication Packaging",
    description: "Custom blister packs to simplify your daily routine.",
    icon: Package,
    link: "/services/medication-packaging",
  },
  {
    title: "Medicare Open Enrollment",
    description: "Get expert help choosing the best Medicare Part D plan.",
    icon: Stethoscope,
    link: "/services/medicare-open-enrollment",
  },
  {
    title: "Medical Supplies",
    description: "Durable equipment and supplies for your everyday needs.",
    icon: HeartPulse,
    link: "/services/medical-supplies",
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-gray-50" id="services">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-blue-900">
          Our Services
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.link}
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition p-8 text-left"
            >
              {/* Icon */}
              <service.icon className="h-12 w-12 text-blue-700 mb-4 group-hover:scale-110 transition" />

              {/* Title */}
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
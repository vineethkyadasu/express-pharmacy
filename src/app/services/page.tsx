"use client";

import Image from "next/image";
import Link from "next/link";

const services = [
  {
    name: "Prescription Medications",
    image: "/services/prescription.jpg",
  },
  {
    name: "Immunizations",
    image: "/services/immunizations.jpg",
  },
  {
    name: "Vitamins / Supplements",
    image: "/services/vitamins.jpg",
  },
  {
    name: "OTC Drugs",
    image: "/services/otc.jpg",
  },
  {
    name: "Surgical Supplies",
    image: "/services/surgical.jpg",
  },
  {
    name: "DME (Durable Medical Equipment)",
    image: "/services/dme.jpg",
  },
  {
    name: "Diabetic Supplies",
    image: "/services/diabetic.jpg",
  },
  {
    name: "E-Prescribing",
    image: "/services/eprescribing.jpg",
  },
  {
    name: "Pharmacist Consultation",
    image: "/services/consultation.jpg",
  },
  {
    name: "Delivery Service",
    image: "/services/delivery.jpg",
  },
  {
    name: "Patient Counseling",
    image: "/services/counseling.jpg",
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Intro */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900">
          Quality Services Tailored to Your Healthcare Needs
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-12">
          We offer a range of services to help our customers maintain their health and well-being. 
          From consultation services in Skillman, New Jersey to medication management and vaccinations, 
          we are here to provide support and guidance every step of the way. 
          Our independent pharmacy is committed to helping our community stay healthy and happy.
        </p>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.name}
              className="relative rounded-xl overflow-hidden shadow-md hover:shadow-lg transition group"
            >
              <Image
                src={service.image}
                alt={service.name}
                width={400}
                height={300}
                className="object-cover w-full h-56 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-blue-900/60 group-hover:bg-blue-900/40 transition"></div>
              <h3 className="absolute bottom-4 left-4 right-4 text-white text-xl font-semibold">
                {service.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Outro */}
        <p className="text-gray-700 mt-16 max-w-2xl mx-auto">
          Let us be your partner in health — 
          <Link href="/contact" className="text-blue-900 font-semibold hover:underline">
            contact us today
          </Link>{" "}
          for all your healthcare needs.
        </p>
      </div>
    </section>
  );
}

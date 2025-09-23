"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-blue-900 text-white py-24">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        
        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          Your Trusted Local Pharmacy in Somerset, NJ
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl mb-8 max-w-2xl">
          Fast, Reliable, Convenient — with Free Delivery & Senior Discounts
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4">
          <Link
            href="/contact"
            className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Contact Us
          </Link>
          <Link
            href="/services"
            className="bg-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
          >
            Our Services
          </Link>
        </div>
      </div>

      {/* Optional background overlay for style */}
      <div className="absolute inset-0 bg-[url('/pharmacy-hero.jpg')] bg-cover bg-center opacity-30 -z-10"></div>
    </section>
  );
}
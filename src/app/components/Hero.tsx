"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative text-white py-24 overflow-hidden">
      {/* Background image with blue overlay */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-[url('/pharmacy-hero.jpg')] bg-cover bg-[position:center_15%] scale-105 transition-transform duration-700"
        ></div>
        <div className="absolute inset-0 bg-blue-900/70"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 flex flex-col items-center text-center animate-fadeIn">
        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg">
          Your Trusted Local Pharmacy in Somerset, NJ
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl mb-8 max-w-2xl text-gray-100 drop-shadow-md">
          Fast, Reliable, Convenient — with Free Delivery & Senior Discounts
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition shadow-md"
          >
            Contact Us
          </Link>
          <Link
            href="/services"
            className="bg-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition shadow-md"
          >
            Our Services
          </Link>
        </div>

        {/* Refill Rx Button (Mobile Only) */}
        <div className="mt-6 block md:hidden">
          <Link
            href="/refill-rx"
            className="bg-red-600 px-10 py-3 rounded-lg font-semibold hover:bg-red-700 transition shadow-md"
          >
            Refill Rx
          </Link>
        </div>
      </div>
    </section>
  );
}

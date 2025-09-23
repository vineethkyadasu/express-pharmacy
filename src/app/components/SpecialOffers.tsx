"use client";

import { Tag } from "lucide-react";

const offers = [
  {
    title: "$10 OFF",
    description: "Transfer your prescription and get $10 OFF instantly!",
    color: "bg-red-100 text-red-700 border-red-300",
  },
  {
    title: "$20 OFF",
    description: "Spend $100 or more on over-the-counter products and save $20.",
    color: "bg-green-100 text-green-700 border-green-300",
  },
  {
    title: "$35 OFF",
    description: "Special coupon: Save $35 on select healthcare packages.",
    color: "bg-blue-100 text-blue-700 border-blue-300",
  },
];

export default function SpecialOffers() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-red-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-blue-900">
          Special Offers & Discounts
        </h2>

        {/* Offers Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {offers.map((offer) => (
            <div
              key={offer.title}
              className={`rounded-2xl border shadow-md p-8 ${offer.color}`}
            >
              <Tag className="h-10 w-10 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">{offer.title}</h3>
              <p className="text-base">{offer.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
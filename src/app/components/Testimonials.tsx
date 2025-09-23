"use client";

import { Star } from "lucide-react";

const reviews = [
  {
    name: "Maria P.",
    text: "The staff is so friendly and helpful! I transferred my prescriptions here and I’m glad I did.",
    rating: 5,
  },
  {
    name: "John D.",
    text: "Quick service and very affordable. They even helped me save money on generics.",
    rating: 5,
  },
  {
    name: "Aisha K.",
    text: "Excellent pharmacy with caring staff. They always answer my questions patiently.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-blue-900">
          What Our Patients Say
        </h2>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center"
            >
              {/* Star Ratings */}
              <div className="flex mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-600 italic mb-4">"{review.text}"</p>
              <h3 className="font-semibold text-blue-800">{review.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
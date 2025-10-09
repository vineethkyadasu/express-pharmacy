// src/app/about/page.tsx
import Image from "next/image";

export const metadata = {
  title: "About Us — Express Pharmacy",
  description:
    "Learn more about Express Pharmacy — your trusted neighborhood pharmacy dedicated to personalized care and affordable prescriptions.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">About Express Pharmacy</h1>
          <p className="mt-4 text-blue-100 text-lg max-w-2xl mx-auto">
            Your neighborhood pharmacy committed to quality care, personal service, and affordable healthcare.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/pharmacy-interior.jpg" // you can replace this with a real photo later
              alt="Express Pharmacy Store"
              fill
              className="object-cover"
            />
          </div>

          {/* Right: Text */}
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              Caring for Our Community
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              At <b>Express Pharmacy</b>, we believe that healthcare should be personal, accessible, and affordable. 
              Our team is dedicated to building lasting relationships with our patients by offering expert guidance 
              and personalized medication management.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              We go beyond filling prescriptions — we take the time to understand your health goals, 
              provide trusted advice, and offer convenient services like medication synchronization, 
              packaging, and immunizations to simplify your life.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Whether you need help managing chronic medications, 
              reviewing your Medicare plan, or finding quality medical supplies — 
              Express Pharmacy is here to help you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Mission</h2>
          <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Our mission is to improve the health and well-being of our community 
            by providing personalized pharmaceutical care with compassion and integrity.
            We strive to make every patient experience convenient, informative, and uplifting.
          </p>
        </div>
      </section>
    </main>
  );
}
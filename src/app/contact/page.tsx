// src/app/contact/page.tsx
import ContactForm from "../components/ContactForm";
import MapEmbed from "../components/MapEmbed";

export const metadata = {
  title: "Contact — Express Pharmacy",
  description: "Contact Express Pharmacy — address, hours, and map.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <header className="bg-blue-900 text-white py-10">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold">Contact Us</h1>
          <p className="mt-2 text-blue-100">
            Reach Express Pharmacy — call, visit, or send us a message.
          </p>
        </div>
      </header>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10">
          {/* Left: Contact details + hours */}
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
              <h2 className="text-xl font-semibold mb-3 text-blue-900">Contact Information</h2>
              <p className="text-gray-700">Express Pharmacy</p>
              <p className="text-gray-700">2013 Rt 27, Unit 1, Somerset, NJ 08873</p>
              <p className="text-gray-700">Tel: <a href="tel:7329511002" className="text-blue-700">732-951-1002</a></p>
              <p className="text-gray-700">Fax: 732-951-1005</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold mb-3 text-blue-900">Store Hours</h3>
              <ul className="text-gray-700 space-y-1">
                <li>Mon–Fri: 9:00 am – 7:00 pm</li>
                <li>Sat: 10:00 am – 4:00 pm</li>
                <li>Sun: Closed</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold mb-3 text-blue-900">Quick Actions</h3>
              <div className="flex flex-wrap gap-3">
                <a href="tel:7329511002" className="px-4 py-2 rounded-lg bg-blue-900 text-white">Call Now</a>
                <a href="#contact-form" className="px-4 py-2 rounded-lg border border-blue-900 text-blue-900">Send Message</a>
                <a href="/services" className="px-4 py-2 rounded-lg bg-red-600 text-white">Our Services</a>
              </div>
            </div>
          </div>

          {/* Right: Map + Form */}
          <div className="space-y-6">
            <div className="rounded-xl overflow-hidden shadow-md">
              <MapEmbed />
            </div>

            <div id="contact-form" className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold mb-4 text-blue-900">Send us a message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
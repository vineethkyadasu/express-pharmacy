import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0A2240] text-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        {/* Column 1: Logo / About */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/logo.png"
              alt="Express Pharmacy Logo"
              width={45}
              height={45}
              className="object-contain"
            />
            <h2 className="text-2xl font-bold text-white">
              Express <span className="text-green-400">Pharmacy</span>
            </h2>
          </div>
          <p className="text-gray-300 leading-relaxed">
            Your neighborhood pharmacy providing quality healthcare,
            personalized service, and trusted wellness support.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 uppercase tracking-wide">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-blue-300 transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-blue-300 transition">About Us</Link></li>
            <li><Link href="/services" className="hover:text-blue-300 transition">Our Services</Link></li>
            <li>
              <Link href="/medical-supplies" className="hover:text-blue-300 transition">
                Medical Supplies
              </Link>
            </li>
            <li><Link href="/contact" className="hover:text-blue-300 transition">Contact Us</Link></li>
          </ul>
        </div>

        {/* Column 3: Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 uppercase tracking-wide">
            Our Services
          </h3>
          <ul className="space-y-2">
            <li><Link href="/services/immunizations" className="hover:text-blue-300 transition">Immunizations</Link></li>
            <li><Link href="/services/medication-synchronization" className="hover:text-blue-300 transition">Medication Synchronization</Link></li>
            <li><Link href="/services/medication-packaging" className="hover:text-blue-300 transition">Medication Packaging</Link></li>
            <li><Link href="/services/medical-supplies" className="hover:text-blue-300 transition">Medical Supplies</Link></li>
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 uppercase tracking-wide">
            Contact Info
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li>📍 2013 Rt 27, Unit 1, Somerset, NJ 08873</li>
            <li>
              📞 <a href="tel:7329511002" className="hover:text-blue-300">732-951-1002</a>
            </li>
            <li>📠 Fax: 732-951-1005</li>
            <li>
              ✉️ <a href="mailto:info@expresspharmacy.com" className="hover:text-blue-300">
                info@expresspharmacy.com
              </a>
            </li>
            <li>🕒 Mon–Fri: 9 am–7 pm<br />Sat: 10 am–4 pm</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#081A33] text-center py-6 text-sm text-gray-400 border-t border-gray-700">
        <p>
          © {new Date().getFullYear()} Express Pharmacy — All Rights Reserved.
        </p>
        <p className="mt-2">
          Designed & Developed by{" "}
          <a
            href="https://vikrin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 font-medium"
          >
            Vikrin
          </a>
        </p>
      </div>
    </footer>
  );
}

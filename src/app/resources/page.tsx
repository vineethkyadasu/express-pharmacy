// src/app/resources/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Resources — Express Pharmacy",
  description:
    "Explore trusted pharmacy resources, healthcare links, and patient safety organizations.",
};

export default function ResourcesPage() {
  const helpfulLinks = [
    {
      name: "U.S. Food and Drug Administration (FDA)",
      url: "https://www.fda.gov",
      desc: "Official FDA website — drug approvals, recalls, and consumer health information.",
    },
    {
      name: "ConsumerMedSafety.org",
      url: "https://www.consumermedsafety.org",
      desc: "Consumer guidance for safe medication use and avoiding errors.",
    },
    {
      name: "Institute for Safe Medication Practices (ISMP)",
      url: "https://www.ismp.org",
      desc: "Independent nonprofit promoting safe medication practices.",
    },
    {
      name: "Consumer Healthcare Products Association (CHPA)",
      url: "https://www.chpa-info.org",
      desc: "Advocates for safe use of over-the-counter medicines and dietary supplements.",
    },
    {
      name: "PDR.net",
      url: "https://www.pdr.net",
      desc: "Trusted source for FDA-approved drug labeling for healthcare professionals.",
    },
  ];

  return (
    <main className="bg-white">
      {/* Header */}
      <header className="bg-blue-900 text-white py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">Resources</h1>
        <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
          Trusted pharmacy links and helpful resources to support your health.
        </p>
        <p className="mt-2 text-blue-200">Home » Resources</p>
      </header>

      {/* Helpful External Links */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-blue-900 mb-8 text-center">
            Helpful Pharmacy Links
          </h2>
          <div className="space-y-6">
            {helpfulLinks.map((link) => (
              <div
                key={link.url}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold text-blue-900">
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {link.name}
                  </a>
                </h3>
                <p className="text-gray-700 mt-2">{link.desc}</p>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline text-sm"
                >
                  {link.url.replace("https://", "").replace("www.", "")}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-semibold text-blue-900 mb-4">
          You Are Our Top Priority
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-6">
          Our mission is to ensure every patient receives the best care and accurate
          medication guidance. Reach out to our pharmacists anytime for support.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-blue-900 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition"
        >
          Talk to Our Pharmacist
        </Link>
      </section>
    </main>
  );
}
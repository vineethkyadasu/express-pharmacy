"use client";
import { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  // ✅ Properly typed event handler
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // ✅ Properly typed submit handler
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    const emailData = {
      ...formData,
      title: formData.from_name, // 👈 used for subject: Contact Us: {{title}}
      time: new Date().toLocaleString(), // 👈 used for {{time}} in your email template
    };

    emailjs
      .send(
        "service_vh27chc", // your service ID
        "template_9tu2lug", // your template ID
        emailData,
        "0uoiqedD2ILnqfgYP" // your public key
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          setFormData({ from_name: "", from_email: "", message: "" });
        },
        (error) => {
          console.error(error);
          setStatus("❌ Failed to send. Try again later.");
        }
      );
  };

  return (
    <form
      onSubmit={sendEmail}
      className="space-y-4 max-w-lg mx-auto bg-white shadow-lg p-8 rounded-2xl"
    >
      <h2 className="text-xl font-semibold text-center text-gray-800 mb-2">
        Contact Express Pharmacy
      </h2>

      <input
        type="text"
        name="from_name"
        placeholder="Your Name"
        value={formData.from_name}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 p-3 rounded-lg focus:border-blue-700 focus:ring-2 focus:ring-blue-100"
      />

      <input
        type="email"
        name="from_email"
        placeholder="Your Email"
        value={formData.from_email}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 p-3 rounded-lg focus:border-blue-700 focus:ring-2 focus:ring-blue-100"
      />

      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        required
        rows={5}
        className="w-full border border-gray-300 p-3 rounded-lg focus:border-blue-700 focus:ring-2 focus:ring-blue-100"
      ></textarea>

      <button
        type="submit"
        className="w-full bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition-all duration-200"
      >
        Send Message
      </button>

      {status && (
        <p className="text-sm mt-3 text-center text-gray-700">{status}</p>
      )}
    </form>
  );
}

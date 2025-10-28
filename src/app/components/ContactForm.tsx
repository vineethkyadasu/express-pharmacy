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

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e: any) => {
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
    <form onSubmit={sendEmail} className="space-y-4 max-w-lg mx-auto">
      <input
        type="text"
        name="from_name"
        placeholder="Your Name"
        value={formData.from_name}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 p-3 rounded-lg"
      />
      <input
        type="email"
        name="from_email"
        placeholder="Your Email"
        value={formData.from_email}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 p-3 rounded-lg"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 p-3 rounded-lg"
        rows={5}
      ></textarea>
      <button
        type="submit"
        className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition w-full"
      >
        Send Message
      </button>
      {status && <p className="text-sm mt-2 text-center">{status}</p>}
    </form>
  );
}

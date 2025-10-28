"use client";
import { useState } from "react";
import Image from "next/image";
import emailjs from "emailjs-com";

export default function RefillRx() {
  const [form, setForm] = useState({
    lastName: "",
    firstName: "",
    phone: "",
    rxNumbers: [""],
    otc: [{ name: "", qty: "" }],
    pickup: "Pickup",
    notify: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const sendEmail = (e) => {
  e.preventDefault();
  setStatus("Sending...");

  emailjs
    .send(
      "service_vh27chc", // ✅ your EmailJS Service ID
      "template_56o0ndl", // ✅ your Template ID
      {
        firstName: form.firstName,
        lastName: form.lastName,
        phone: form.phone,
        rxNumbers: form.rxNumbers.join(", "),
        otc: form.otc.map((i) => `${i.name} (${i.qty})`).join(", "),
        pickup: form.pickup,
        notify: form.notify,
        time: new Date().toLocaleString(),
      },
      "0uoiqedD2ILnqfgYP" // ✅ your EmailJS Public Key
    )
    .then(
      () => {
        setStatus("✅ Refill request sent successfully!");
        setForm({
          lastName: "",
          firstName: "",
          phone: "",
          rxNumbers: [""],
          otc: [{ name: "", qty: "" }],
          pickup: "Pickup",
          notify: "",
        });
      },
      (error) => {
        console.error(error);
        setStatus("❌ Failed to send. Please try again later.");
      }
    );
};


  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="relative w-full h-[45vh] md:h-[60vh]">
        <Image
          src="/images/refill-hero.jpg"
          alt="Pharmacy Refill"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-blue-900/50 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 drop-shadow-lg leading-snug">
            Refill Your Prescription
          </h1>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl sm:max-w-3xl">
            Refilling your prescription has never been easier. Simply fill out
            the form below, and we’ll prepare your medication for pickup or
            delivery.
          </p>
        </div>
      </div>

      {/* Form Section */}
      <section className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl p-8 md:p-12 -mt-16 relative z-10">
        <p className="text-gray-700 mb-10 text-lg text-center font-medium">
          Just fill out the form below, and we’ll make sure your refill is ready
          for pickup or delivery when you need it.
        </p>

        <form onSubmit={sendEmail} className="space-y-10">
          {/* Name & Phone */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-800">
                Last Name *
              </label>
              <input
                type="text"
                name="lastName"
                required
                value={form.lastName}
                onChange={handleChange}
                className="w-full bg-gray-50 border border-gray-300 text-gray-900 rounded-lg p-3 placeholder-gray-500 focus:border-blue-700 focus:ring-2 focus:ring-blue-100"
                placeholder="Enter last name"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-800">
                First Name *
              </label>
              <input
                type="text"
                name="firstName"
                required
                value={form.firstName}
                onChange={handleChange}
                className="w-full bg-gray-50 border border-gray-300 text-gray-900 rounded-lg p-3 placeholder-gray-500 focus:border-blue-700 focus:ring-2 focus:ring-blue-100"
                placeholder="Enter first name"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-800">
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              required
              value={form.phone}
              onChange={handleChange}
              className="w-full bg-gray-50 border border-gray-300 text-gray-900 rounded-lg p-3 placeholder-gray-500 focus:border-blue-700 focus:ring-2 focus:ring-blue-100"
              placeholder="+1 (XXX) XXX-XXXX"
            />
          </div>

          {/* RX Numbers */}
          <div>
            <label className="block text-sm font-semibold mb-3 text-gray-800">
              RX Refill Numbers
            </label>
            {form.rxNumbers.map((num, i) => (
              <input
                key={i}
                type="text"
                value={num}
                onChange={(e) => {
                  const rx = [...form.rxNumbers];
                  rx[i] = e.target.value;
                  setForm({ ...form, rxNumbers: rx });
                }}
                placeholder={`RX Number ${i + 1}`}
                className="w-full bg-gray-50 border border-gray-300 text-gray-900 rounded-lg p-3 mb-3 placeholder-gray-500 focus:border-blue-700 focus:ring-2 focus:ring-blue-100"
              />
            ))}
            <button
              type="button"
              onClick={() =>
                setForm({ ...form, rxNumbers: [...form.rxNumbers, ""] })
              }
              className="text-blue-700 text-sm font-semibold hover:underline"
            >
              + Add More
            </button>
          </div>

          {/* OTC Items */}
          <div>
            <label className="block text-sm font-semibold mb-3 text-gray-800">
              Add More Prescriptions (Over The Counter)
            </label>
            {form.otc.map((item, i) => (
              <div key={i} className="grid md:grid-cols-2 gap-4 mb-3">
                <input
                  type="text"
                  value={item.name}
                  onChange={(e) => {
                    const updated = [...form.otc];
                    updated[i].name = e.target.value;
                    setForm({ ...form, otc: updated });
                  }}
                  placeholder={`Item ${i + 1}`}
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg p-3 placeholder-gray-500 focus:border-blue-700 focus:ring-2 focus:ring-blue-100"
                />
                <input
                  type="text"
                  value={item.qty}
                  onChange={(e) => {
                    const updated = [...form.otc];
                    updated[i].qty = e.target.value;
                    setForm({ ...form, otc: updated });
                  }}
                  placeholder="Quantity"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg p-3 placeholder-gray-500 focus:border-blue-700 focus:ring-2 focus:ring-blue-100"
                />
              </div>
            ))}
            <button
              type="button"
              onClick={() =>
                setForm({
                  ...form,
                  otc: [...form.otc, { name: "", qty: "" }],
                })
              }
              className="text-blue-700 text-sm font-semibold hover:underline"
            >
              + Add More
            </button>
          </div>

          {/* Pickup / Delivery */}
          <div>
            <label className="block text-sm font-semibold mb-3 text-gray-800">
              Pickup or Delivery *
            </label>
            <div className="flex gap-6">
              {["Pickup", "Delivery"].map((option) => (
                <label key={option} className="flex items-center gap-2 text-gray-800">
                  <input
                    type="radio"
                    name="pickup"
                    value={option}
                    checked={form.pickup === option}
                    onChange={handleChange}
                    className="accent-blue-700"
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>

          {/* Notification */}
          <div>
            <label className="block text-sm font-semibold mb-3 text-gray-800">
              Notify when ready?
            </label>
            <select
              name="notify"
              value={form.notify}
              onChange={handleChange}
              className="w-full bg-gray-50 border border-gray-300 text-gray-900 rounded-lg p-3"
            >
              <option value="">Please Select</option>
              <option value="Yes">Yes, notify me</option>
              <option value="No">No, thank you</option>
            </select>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-900 text-white font-semibold py-4 rounded-lg hover:bg-blue-800 transition-all duration-200"
          >
            Submit Refill Request
          </button>
          {status && (
            <p className="text-center mt-4 text-sm text-gray-700">{status}</p>
          )}
        </form>
      </section>
    </div>
  );
}

// src/app/components/MapEmbed.tsx
"use client";

export default function MapEmbed() {
  // Google Maps embed — using address coordinates for Express Pharmacy (Somerset, NJ)
  // If you have a Google Maps embed link, replace the src below with that full embed URL.
  const src =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.106838270539!2d-74.52139308459352!3d40.5051639793659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3c8f9b3f3e7b7%3A0x0000000000000000!2s2013+Rt+27%2C+Somerset%2C+NJ+08873!5e0!3m2!1sen!2sus!4v1690000000000";
  // NOTE: the pb= chunk above is a placeholder; if map doesn't point correctly, go to Google Maps -> Share -> Embed a map -> copy iframe src.
  return (
    <iframe
      title="Express Pharmacy Location"
      src={src}
      width="100%"
      height="420"
      style={{ border: 0 }}
      allowFullScreen={false}
      loading="lazy"
    />
  );
}
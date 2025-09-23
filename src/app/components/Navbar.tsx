"use client";

import Link from "next/link";

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
    { name: "Offers", path: "/offers" },
  ];

  return (
    <nav className="bg-blue-900 text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-wide">
          EXPRESS Pharmacy
        </Link>

        {/* Links */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.path} className="hover:text-blue-300">
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
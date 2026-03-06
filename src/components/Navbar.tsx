"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/examenes", label: "Exámenes" },
  { href: "/a-domicilio", label: "A Domicilio" },
  { href: "/contacto", label: "Contacto" },
  { href: "/politicas", label: "Politicas" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <span className="text-3xl text-azlab-blue-500 font-rockin">AZ</span>
            <span className="text-3xl text-azlab-green-500 font-rockin">
              Lab
            </span>
          </Link>

          {/* Nav links - centered */}
          <div className="hidden sm:flex items-center gap-1">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "bg-azlab-green-500 text-white"
                      : "text-gray-500 hover:text-azlab-green-600 hover:bg-azlab-green-50"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </div>

          {/* Right side: cart + CTA */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Cart icon */}
            <button
              type="button"
              className="p-2 text-gray-500 hover:text-azlab-green-600 transition-colors duration-200"
              aria-label="Carrito"
            >
              <span className="material-symbols-outlined text-azlab-blue-500">
                shopping_cart
              </span>
            </button>

            {/* CTA Button */}
            <Link
              href="/a-domicilio"
              className="flex items-center gap-2 bg-azlab-green-500 hover:bg-azlab-green-600 text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors duration-200"
            >
              Agendar a domicilio
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-azlab-green-500 hover:bg-gray-50 focus:outline-none"
              aria-label="Abrir menú"
              aria-expanded={menuOpen}
            >
              <span className="sr-only">Abrir menú</span>
              {menuOpen ? (
                /* X icon when open */
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                /* Hamburger icon when closed */
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="sm:hidden border-t border-gray-100 bg-white px-4 py-3 flex flex-col gap-1">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`block px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "bg-azlab-green-500 text-white"
                    : "text-gray-500 hover:text-azlab-green-600 hover:bg-azlab-green-50"
                }`}
              >
                {label}
              </Link>
            );
          })}

          {/* CTA mobile */}
          <Link
            href="/a-domicilio"
            onClick={() => setMenuOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 bg-azlab-green-500 hover:bg-azlab-green-600 text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors duration-200"
          >
            Agendar a domicilio
          </Link>
        </div>
      )}
    </nav>
  );
}

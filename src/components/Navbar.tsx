import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-azlab-blue-100 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-3xl text-azlab-blue-500 bg-clip-text font-rockin">
                AZ
              </span>
              <span className="text-3xl text-azlab-green-500 bg-clip-text font-rockin">
                Lab
              </span>
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-8">
            <Link
              href="/"
              className="px-3 py-2 rounded-md text-sm font-medium text-azlab-blue-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
            >
              Inicio
            </Link>
            <Link
              href="/examenes"
              className="px-3 py-2 rounded-md text-sm font-medium text-azlab-blue-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
            >
              Examenes
            </Link>
            <Link
              href="/contacto"
              className="px-3 py-2 rounded-md text-sm font-medium text-azlab-blue-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
            >
              Contacto
            </Link>
          </div>
          <div className="flex items-center sm:hidden">
            {/* Mobile menu button placeholder - can be implemented fully later */}
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-azlab-blue-400 hover:text-azlab-blue-500 hover:bg-azlab-blue-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
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
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

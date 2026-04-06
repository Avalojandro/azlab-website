import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/" className="flex items-center">
                <span className="text-3xl text-azlab-blue-500 bg-clip-text font-rockin">
                  AZ
                </span>
                <span className="text-3xl text-azlab-green-500 bg-clip-text font-rockin">
                  Lab
                </span>
              </Link>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Laboratorio clínico con servicio a domicilio en Santa Ana, El
              Salvador. Resultados confiables, atención profesional.
            </p>
            {/* <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-azlab-green-500 hover:text-white transition-colors"
              >
                <span className="material-symbols-outlined text-sm">
                  facebook
                </span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-azlab-green-500 hover:text-white transition-colors"
              >
                <span className="material-symbols-outlined text-sm">
                  photo_camera
                </span>
              </a>
            </div> */}
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h4 className="font-semibold text-azlab-blue-900 mb-4">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/examenes"
                  className="text-sm text-gray-600 hover:text-azlab-green-500 transition-colors"
                >
                  Catálogo de Exámenes
                </Link>
              </li>
              <li>
                <Link
                  href="/examenes"
                  className="text-sm text-gray-600 hover:text-azlab-green-500 transition-colors"
                >
                  Servicio a Domicilio
                </Link>
              </li>
              <li>
                <Link
                  href="#contacto"
                  className="text-sm text-gray-600 hover:text-azlab-green-500 transition-colors"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="font-semibold text-azlab-blue-900 mb-4">
              Servicios
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/examenes"
                  className="text-sm text-gray-600 hover:text-azlab-green-500 transition-colors"
                >
                  Química Sanguínea
                </Link>
              </li>
              <li>
                <Link
                  href="/examenes"
                  className="text-sm text-gray-600 hover:text-azlab-green-500 transition-colors"
                >
                  Hematología
                </Link>
              </li>
              <li>
                <Link
                  href="/examenes"
                  className="text-sm text-gray-600 hover:text-azlab-green-500 transition-colors"
                >
                  Ureanálisis
                </Link>
              </li>
              <li>
                <Link
                  href="/examenes"
                  className="text-sm text-gray-600 hover:text-azlab-green-500 transition-colors"
                >
                  Perfiles y Paquetes
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-semibold text-azlab-blue-900 mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <span className="material-symbols-outlined text-azlab-green-500 text-lg">
                  location_on
                </span>
                <span>Santa Ana, El Salvador</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <span className="material-symbols-outlined text-azlab-green-500 text-lg">
                  call
                </span>
                <span>+503 6956-5468</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <span className="material-symbols-outlined text-azlab-green-500 text-lg">
                  mail
                </span>
                <span>info@azlabhealthcare.com</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <span className="material-symbols-outlined text-azlab-green-500 text-lg">
                  schedule
                </span>
                <span>Lun - Sáb: 6:00 AM - 4:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © 2024 AZLAB Healthcare. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacidad"
              className="text-sm text-gray-500 hover:text-azlab-green-500 transition-colors"
            >
              Privacidad
            </Link>
            <Link
              href="/terminos"
              className="text-sm text-gray-500 hover:text-azlab-green-500 transition-colors"
            >
              Términos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

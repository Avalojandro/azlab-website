import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
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
            <p className="text-sm text-gray-600 mb-4 max-w-sm">
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
          <div className="md:col-span-1">
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

          {/* Contacto */}
          <div className="md:col-span-2">
            <h4 className="font-semibold text-azlab-blue-900 mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <span className="material-symbols-outlined text-azlab-green-500 text-lg">
                  location_on
                </span>
                <span>
                  8va Avenida Sur, Entre 23 y 25 Calle Poniente, #2, Santa Ana.
                  Frente a Quesadillas Maybelline, Santa Ana, El Salvador, 2201
                </span>
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
                <span>
                  {/* laboratoriosazlab@gmail.com */}
                  laboratoriosazlab@gmail.com
                </span>
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
            © {new Date().getFullYear()} AZLAB Healthcare. Todos los derechos
            reservados.
          </p>
          <div className="flex gap-6">
            <Link
              href="/politicas#privacidad"
              className="text-sm text-gray-500 hover:text-azlab-green-500 transition-colors"
            >
              Políticas y Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

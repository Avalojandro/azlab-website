import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contacto | AZ Lab",
  description: "Ponte en contacto con AZ Lab para agendar exámenes de laboratorio a domicilio o resolver tus dudas. Estamos para servirte.",
};

export default function ContactoPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-azlab-blue-500 sm:text-5xl sm:tracking-tight lg:text-5xl">
          <span className="text-azlab-blue-500">Contáctanos</span>
        </h1>
        <p className="mt-5 max-w-xl mx-auto text-xl text-gray-600">
          Estamos aquí para atenderte. Visítanos o escríbenos.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-azlab-blue-500 mb-8">
            Información de contacto
          </h2>

          <div className="space-y-6 mb-8">
            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-azlab-green-100">
                  <span className="material-symbols-outlined text-azlab-green-600 text-xl">
                    call
                  </span>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Teléfono</p>
                <p className="font-semibold text-azlab-blue-500">
                  +503 6956-5468
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-azlab-green-100">
                  <span className="material-symbols-outlined text-azlab-green-600 text-xl">
                    mail
                  </span>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Correo</p>
                <p className="font-semibold text-azlab-blue-500">
                  {/* info@azlabhealthcare.com */}
                  avalojandro@gmail.com
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4">
              <div className="shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-azlab-green-100">
                  <span className="material-symbols-outlined text-azlab-green-600 text-xl">
                    location_on
                  </span>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Dirección</p>
                <p className="font-semibold text-azlab-blue-500">
                  Santa Ana, El Salvador
                </p>
              </div>
            </div>

            {/* Schedule */}
            <div className="flex items-start gap-4">
              <div className="shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-azlab-green-100">
                  <span className="material-symbols-outlined text-azlab-green-600 text-xl">
                    schedule
                  </span>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Horario</p>
                <p className="font-semibold text-azlab-blue-500">
                  Lun - Sáb: 6:00 AM - 4:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* WhatsApp Button */}
          <a
            // Original number: 50369565468
            href="https://wa.me/50375791475"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-azlab-green-500 text-white font-semibold rounded-lg hover:bg-azlab-green-600 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              stroke="currentColor"
              strokeWidth="0.4"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
            </svg>
            Escríbenos por WhatsApp
          </a>
        </div>

        {/* Contact Form */}
        <ContactForm />
      </div>
    </div>
  );
}

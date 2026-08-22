import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contacto | AZ Lab",
  description:
    "Ponte en contacto con AZ Lab para agendar exámenes de laboratorio a domicilio o resolver tus dudas. Estamos para servirte.",
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
                  info@azlabhealthcare.com
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
        </div>

        {/* Contact Form */}
        <ContactForm />
      </div>
    </div>
  );
}

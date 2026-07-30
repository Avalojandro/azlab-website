const ContactCta: React.FC = () => {
  return (
    <section className="py-16 bg-linear-to-br from-azlab-green-500 to-azlab-blue-500">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Content */}
          <div>
            <h2 className="text-3xl md:text-3xl font-bold text-white mb-4">
              ¿Listo para agendar tu exámen?
            </h2>
            <p className="text-white/90  mb-6">
              Contáctanos ahora y un asesor te ayudará con tu cita a domicilio o
              en sucursal.
            </p>

            <div className="space-y-3">
              {/* Phone */}
              <div className="flex items-center gap-3 text-white">
                <span className="material-symbols-outlined">call</span>
                <span className="font-medium">+503 6956-5468</span>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3 text-white">
                <span className="material-symbols-outlined">mail</span>
                <span className="font-medium">
                  {/* info@azlabhealthcare.com */}
                  avalojandro@gmail.com
                </span>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 text-white">
                <span className="material-symbols-outlined">location_on</span>
                <span className="font-medium">Santa Ana, El Salvador</span>
              </div>
            </div>
          </div>

          {/* Right Column - Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 md:justify-end">
            <a
              // Original number: 50369565468
              href="https://wa.me/50375791475"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-azlab-green-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                stroke="currentColor"
                strokeWidth="0.4"
                fill="currentColor"
                className="bi bi-whatsapp text-azlab-green-600"
                viewBox="0 0 16 16"
              >
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
              </svg>
              WhatsApp
            </a>
            <a
              href="/examenes"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-azlab-green-500 text-white font-semibold rounded-lg hover:bg-azlab-green-700 transition-colors"
            >
              Ver exámenes
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCta;

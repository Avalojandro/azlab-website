"use client";

import React, { useState } from "react";
import Link from "next/link";

interface PolicySection {
  id: string;
  title: string;
  icon: string;
  content: React.ReactNode;
}

export default function PoliticasYPrivacidadPage() {
  const [activeSection, setActiveSection] = useState<string>("all");

  const sections: PolicySection[] = [
    {
      id: "terminos",
      title: "1. Términos y Condiciones de Uso",
      icon: "gavel",
      content: (
        <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
          <p className="text-xs text-azlab-blue-600 font-semibold uppercase tracking-wider">
            Última actualización: Julio de 2026
          </p>

          <div className="space-y-3">
            <div>
              <h4 className="font-bold text-azlab-blue-900">1. Aceptación</h4>
              <p className="mt-1">
                Bienvenido a AZLAB Healthcare. Al acceder o utilizar el sitio
                web{" "}
                <a
                  href="https://www.azlabhealthcare.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-azlab-blue-600 underline font-medium"
                >
                  www.azlabhealthcare.com
                </a>
                , usted acepta estos Términos y Condiciones. Si no está de
                acuerdo con ellos, deberá abstenerse de utilizar nuestros
                servicios.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-azlab-blue-900">
                2. Quiénes somos
              </h4>
              <p className="mt-1">
                AZLAB Healthcare es una plataforma que permite solicitar
                servicios de laboratorio clínico, especialmente agendamiento de
                toma de muestras a domicilio, consulta de información sobre
                exámenes, recepción de resultados (cuando aplique) y atención al
                cliente. Todos los análisis son realizados por profesionales
                autorizados conforme a la legislación salvadoreña.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-azlab-blue-900">
                3. Requisitos para utilizar el servicio
              </h4>
              <p className="mt-1">
                El usuario declara ser mayor de 18 años o contar con
                autorización de su representante legal y garantiza que la
                información proporcionada es verdadera.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-azlab-blue-900">4. Agendamiento</h4>
              <p className="mt-1">
                El usuario podrá seleccionar fecha, hora, dirección, tipo de
                examen y datos del paciente. AZLAB podrá modificar horarios por
                causas de fuerza mayor.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-azlab-blue-900">5. Confirmación</h4>
              <p className="mt-1">
                La cita quedará confirmada únicamente cuando AZLAB envíe la
                confirmación por correo electrónico, WhatsApp, SMS o llamada
                telefónica.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-azlab-blue-900">
                6. Cancelaciones
              </h4>
              <p className="mt-1">
                Las citas podrán cancelarse sin costo con al menos 2 horas de
                anticipación. Si el personal ya se encuentra en desplazamiento
                podrán aplicarse cargos administrativos.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-azlab-blue-900">
                7. Obligaciones del paciente
              </h4>
              <p className="mt-1">
                Seguir las indicaciones de preparación, mantener disponible el
                domicilio, presentar identificación cuando sea requerida e
                informar enfermedades infectocontagiosas cuando corresponda.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-azlab-blue-900">
                8. Disponibilidad
              </h4>
              <p className="mt-1">
                Los servicios están sujetos a cobertura geográfica,
                disponibilidad de personal, condiciones climáticas y seguridad
                de la zona.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-azlab-blue-900">9. Resultados</h4>
              <p className="mt-1">
                Los tiempos de entrega pueden variar por confirmaciones,
                controles de calidad, procesamiento especial o referencias
                externas.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-azlab-blue-900">
                10. Propiedad intelectual
              </h4>
              <p className="mt-1">
                Todo el contenido del sitio pertenece a AZLAB Healthcare. Se
                prohíbe copiar, distribuir, modificar o comercializar el
                contenido sin autorización.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-azlab-blue-900">
                11. Limitación de responsabilidad
              </h4>
              <p className="mt-1">
                AZLAB no será responsable por datos incorrectos proporcionados
                por el usuario, incumplimiento de instrucciones, fuerza mayor,
                fallas de Internet o interrupciones del servicio.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-azlab-blue-900">
                12. Modificaciones
              </h4>
              <p className="mt-1">
                AZLAB podrá actualizar estos términos cuando sea necesario.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-azlab-blue-900">
                13. Legislación aplicable
              </h4>
              <p className="mt-1">
                Estos términos se regirán por las leyes de la República de El
                Salvador.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "privacidad",
      title: "2. Política de Privacidad",
      icon: "lock",
      content: (
        <div className="space-y-3 text-gray-700 text-sm leading-relaxed">
          <ul className="space-y-2.5">
            <li className="flex items-start gap-2">
              <span className="font-bold text-azlab-blue-900 shrink-0 min-w-[170px]">
                • Información recopilada:
              </span>
              <span>
                Nombre, DUI o pasaporte, fecha de nacimiento, sexo, dirección,
                teléfono, correo electrónico, información médica necesaria e
                historial de citas.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-azlab-blue-900 shrink-0 min-w-[170px]">
                • Finalidad:
              </span>
              <span>
                Agendar citas, realizar toma de muestras, procesar análisis
                clínicos, emitir resultados, contactar al paciente, facturación
                y mejora de servicios.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-azlab-blue-900 shrink-0 min-w-[170px]">
                • Confidencialidad:
              </span>
              <span>
                Toda la información médica será tratada con estricta
                confidencialidad.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-azlab-blue-900 shrink-0 min-w-[170px]">
                • Compartir información:
              </span>
              <span>
                Únicamente con laboratorios de referencia, autoridades
                competentes cuando la ley lo requiera y proveedores tecnológicos
                bajo acuerdos de confidencialidad.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-azlab-blue-900 shrink-0 min-w-[170px]">
                • Conservación:
              </span>
              <span>
                Los datos serán almacenados durante el tiempo requerido por la
                legislación aplicable.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-azlab-blue-900 shrink-0 min-w-[170px]">
                • Derechos del paciente:
              </span>
              <span>
                Acceso, corrección, actualización y eliminación cuando
                legalmente proceda.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-azlab-blue-900 shrink-0 min-w-[170px]">
                • Seguridad:
              </span>
              <span>
                AZLAB implementa medidas técnicas y administrativas para
                proteger la información.
              </span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "cookies",
      title: "3. Política de Cookies",
      icon: "cookie",
      content: (
        <p className="text-gray-700 text-sm leading-relaxed">
          El sitio utiliza cookies para mejorar la experiencia del usuario,
          recordar preferencias, analizar estadísticas y optimizar el
          funcionamiento del sitio. El usuario podrá deshabilitarlas desde su
          navegador.
        </p>
      ),
    },
    {
      id: "cancelaciones",
      title: "4. Política de Cancelaciones",
      icon: "event_busy",
      content: (
        <p className="text-gray-700 text-sm leading-relaxed">
          Las citas podrán reprogramarse o cancelarse. Cancelaciones con más de
          2 horas de anticipación: sin costo. Si el personal ya se encuentra en
          ruta podrá aplicarse un cargo por desplazamiento.
        </p>
      ),
    },
    {
      id: "pagos",
      title: "5. Política de Pagos",
      icon: "payments",
      content: (
        <p className="text-gray-700 text-sm leading-relaxed">
          Se aceptan pagos en efectivo, tarjeta, transferencia bancaria y pago
          en línea cuando esté habilitado. Los precios incluyen los impuestos
          aplicables salvo indicación expresa.
        </p>
      ),
    },
    {
      id: "reembolsos",
      title: "6. Política de Reembolsos",
      icon: "published_with_changes",
      content: (
        <p className="text-gray-700 text-sm leading-relaxed">
          Proceden únicamente cuando AZLAB no pueda prestar el servicio, exista
          un cobro duplicado o un error atribuible a AZLAB. No aplican si el
          paciente no se presenta, incumple las instrucciones o rechaza la toma
          de muestra al llegar el personal.
        </p>
      ),
    },
    {
      id: "resultados",
      title: "7. Política de Resultados",
      icon: "clinical_notes",
      content: (
        <p className="text-gray-700 text-sm leading-relaxed">
          Los resultados podrán entregarse por correo electrónico, WhatsApp (con
          autorización) o impresos. AZLAB garantiza la confidencialidad de la
          información clínica.
        </p>
      ),
    },
    {
      id: "consentimiento",
      title: "8. Consentimiento Informado para Toma de Muestras",
      icon: "assignment_turned_in",
      content: (
        <p className="text-gray-700 text-sm leading-relaxed">
          Al solicitar una cita, el paciente autoriza la toma de muestras,
          comprende el procedimiento, declara haber recibido las indicaciones
          correspondientes, entiende los riesgos menores asociados y autoriza el
          tratamiento de sus datos personales para fines diagnósticos y
          administrativos.
        </p>
      ),
    },
    {
      id: "recomendaciones",
      title: "9. Recomendaciones Adicionales",
      icon: "verified_user",
      content: (
        <p className="text-gray-700 text-sm leading-relaxed">
          Se recomienda incorporar un consentimiento expreso para el tratamiento
          de datos personales sensibles, un descargo de responsabilidad médica
          indicando que los resultados deben ser interpretados por un
          profesional de la salud y una política específica para la atención de
          menores de edad.
        </p>
      ),
    },
  ];

  const filteredSections =
    activeSection === "all"
      ? sections
      : sections.filter((sec) => sec.id === activeSection);

  return (
    <main className="min-h-screen bg-azlab-blue-50/30 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-azlab-blue-100/60 text-azlab-blue-900 px-4 py-1.5 rounded-full text-xs font-semibold mb-4">
            <span className="material-symbols-outlined text-base text-azlab-blue-500">
              policy
            </span>
            AZLAB Healthcare · Términos Legales
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-azlab-blue-900 mb-3">
            Políticas y Privacidad
          </h1>
          <p className="text-gray-500 text-sm max-w-2xl mx-auto">
            Consulta los términos y condiciones de uso, políticas de privacidad,
            pagos, reembolsos y manejo de datos clínicos de AZLAB.
          </p>
        </div>

        {/* Filter / Quick Navigation Tabs */}
        <div className="mb-8 flex flex-wrap gap-2 justify-center">
          <button
            type="button"
            onClick={() => setActiveSection("all")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              activeSection === "all"
                ? "bg-azlab-blue-500 text-white shadow-md"
                : "bg-white border border-azlab-blue-100 text-gray-600 hover:bg-azlab-blue-50"
            }`}
          >
            Ver Todas
          </button>
          {sections.map((sec) => (
            <button
              key={sec.id}
              type="button"
              onClick={() => setActiveSection(sec.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeSection === sec.id
                  ? "bg-azlab-blue-500 text-white shadow-md"
                  : "bg-white border border-azlab-blue-100 text-gray-600 hover:bg-azlab-blue-50"
              }`}
            >
              <span className="material-symbols-outlined text-sm">
                {sec.icon}
              </span>
              {sec.title.split(". ")[1]}
            </button>
          ))}
        </div>

        {/* Policy Sections Cards */}
        <div className="space-y-6">
          {filteredSections.map((sec) => (
            <div
              key={sec.id}
              id={sec.id}
              className="bg-white border border-azlab-blue-100 rounded-3xl p-6 md:p-8 shadow-sm transition-all"
            >
              <div className="flex items-center gap-3 mb-4 border-b border-gray-100 pb-3">
                <div className="w-10 h-10 rounded-2xl bg-azlab-blue-50 text-azlab-blue-500 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-xl">
                    {sec.icon}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-azlab-blue-900">
                  {sec.title}
                </h2>
              </div>
              {sec.content}
            </div>
          ))}
        </div>

        {/* Support Note */}
        <div className="mt-12 text-center bg-white border border-azlab-blue-100 rounded-3xl p-6 shadow-sm">
          <h3 className="text-base font-bold text-azlab-blue-900 mb-1">
            ¿Tienes dudas sobre nuestras políticas?
          </h3>
          <p className="text-xs text-gray-500 mb-4">
            Nuestro equipo de atención al cliente está a tu disposición para
            aclarar cualquier consulta referente a la privacidad de tus datos o
            el servicio.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 bg-azlab-green-500 hover:bg-azlab-green-600 text-white font-semibold text-xs px-5 py-2.5 rounded-xl transition-colors shadow-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
            </svg>
            Contáctanos
          </Link>
        </div>
      </div>
    </main>
  );
}

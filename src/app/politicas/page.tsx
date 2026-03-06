"use client";

import { useState } from "react";
import Link from "next/link";

// ─── Privacy Policy sections ─────────────────────────────────────────────────
const privacyPolicy = {
  title: "Política de Privacidad",
  subtitle: "Laboratorio Clínico AZLab",
  updated: "Vigente según última actualización del documento",
  file: "/files/AZLAB Privacy Policy.pdf",
  sections: [
    {
      heading: "1. Información que Recopilamos",
      items: [
        "Datos de identificación personal (nombre, DUI, fecha de nacimiento)",
        "Información de contacto (email, teléfono, dirección)",
        "Datos médicos y de salud necesarios para los exámenes",
        "Información de pago (procesada de forma segura)",
        "Datos de uso de la plataforma web",
      ],
    },
    {
      heading: "2. Uso de la Información",
      items: [
        "Procesamiento y entrega de exámenes de laboratorio",
        "Comunicación sobre resultados y citas",
        "Mejora continua de nuestros servicios",
        "Cumplimiento de obligaciones legales y regulatorias",
        "Facturación y gestión de pagos",
      ],
    },
    {
      heading: "3. Protección de Datos",
      items: [
        "Encriptación SSL/TLS en todas las comunicaciones",
        "Acceso restringido solo a personal autorizado",
        "Almacenamiento seguro de datos médicos",
        "Auditorías regulares de seguridad",
        "Cumplimiento con la Ley Especial de Protección de Datos de El Salvador",
      ],
    },
    {
      heading: "4. Compartición de Datos",
      items: [
        "No vendemos ni alquilamos datos personales a terceros",
        "Compartimos datos solo con laboratorios asociados para prestación del servicio",
        "Podemos compartir con autoridades cuando la ley lo exija",
        "Proveedores de tecnología bajo estrictos acuerdos de confidencialidad",
      ],
    },
    {
      heading: "5. Derechos del Titular",
      items: [
        "Acceso: solicitar copia de sus datos en cualquier momento",
        "Rectificación: corregir información incorrecta",
        "Cancelación: solicitar eliminación de sus datos",
        "Oposición: oponerse al tratamiento de sus datos",
        "Portabilidad: recibir sus datos en formato estructurado",
      ],
    },
    {
      heading: "6. Retención de Datos",
      items: [
        "Datos médicos: mínimo 10 años conforme a normativa sanitaria",
        "Datos de cuenta: mientras el servicio esté activo",
        "Datos de facturación: 7 años según ley tributaria",
        "Logs de sistema: 90 días",
      ],
    },
    {
      heading: "7. Cookies y Tecnologías de Seguimiento",
      items: [
        "Esenciales: funcionamiento básico de la plataforma",
        "Analíticas: mejora de rendimiento y experiencia",
        "Publicitarias: marketing personalizado (con consentimiento)",
        "Panel de configuración disponible para gestionar preferencias",
      ],
    },
    {
      heading: "8. Menores de Edad",
      items: [
        "Prohibido recopilar datos de menores de 14 años sin consentimiento parental",
        "Verificación de edad en registro",
        "Autorización de padres o tutores legales para servicios a menores",
        "Comunicación de resultados a representantes legales",
      ],
    },
    {
      heading: "9. Notificación de Incidentes",
      items: [
        "Notificación a la Comisión Nacional de Datos Personales en 72 horas",
        "Comunicación a titulares afectados ante alto riesgo",
        "Medidas correctivas inmediatas",
        "Informe detallado de causas y soluciones",
      ],
    },
    {
      heading: "10. Contacto y Autoridades de Control",
      body: "Comisión Nacional de Datos Personales (CNDP) — Centro de Gobierno, San Salvador — Tel: 2205-7000 — info@cndp.gob.sv\n\nDefensoría del Consumidor — Teléfono: 128 (línea gratuita) — www.defensoria.gob.sv",
    },
  ],
};

// ─── Reimbursement Policy sections ───────────────────────────────────────────
const reimbursementPolicy = {
  title: "Política de Reembolso",
  subtitle: "Servicios de Agendamiento de Exámenes de Laboratorio Clínico",
  updated: "Elaborado conforme a legislación vigente en El Salvador",
  file: "/files/Reimbursement Policy AZLAB.pdf",
  sections: [
    {
      heading: "1. Disposiciones Generales",
      body: "Esta política se establece en cumplimiento con la Ley de Protección al Consumidor de El Salvador (Decreto Legislativo No. 776) y las regulaciones del Ministerio de Salud, aplicable a todos los servicios de agendamiento ofrecidos a través de nuestra plataforma web.",
    },
    {
      heading: "2. Condiciones para Reembolso",
      subSections: [
        {
          label: "2.1 Cancelación por parte del paciente",
          items: [
            "Con 24 horas de anticipación: Reembolso del 100%",
            "Entre 12–24 horas: Reembolso del 75%",
            "Entre 2–12 horas: Reembolso del 50%",
            "Menos de 2 horas: No aplica reembolso (salvo causas médicas justificadas)",
          ],
        },
        {
          label: "2.2 Cancelación por el laboratorio",
          items: [
            "Reembolso del 100% del monto pagado",
            "Opción de reagendamiento sin costo adicional",
            "Compensación adicional del 10% por inconvenientes causados",
          ],
        },
        {
          label: "2.3 Circunstancias especiales (reembolso completo)",
          items: [
            "Emergencia médica certificada por médico colegiado",
            "Hospitalización del paciente",
            "Fallecimiento del paciente o familiar directo",
            "Desastres naturales o emergencia nacional declarada",
            "Cuarentena sanitaria ordenada por el Ministerio de Salud",
          ],
        },
      ],
    },
    {
      heading: "3. Proceso de Solicitud",
      subSections: [
        {
          label: "3.1 Documentación requerida",
          items: [
            "Número de confirmación de la cita",
            "Documento de identidad (DUI, pasaporte o carnet de residente)",
            "Comprobante de pago original",
            "En casos especiales: documentación médica o certificados oficiales",
          ],
        },
        {
          label: "3.2 Procedimiento",
          items: [
            'Enviar solicitud por correo o formulario web en "Atención al Cliente"',
            "Tiempo de respuesta: máximo 5 días hábiles para evaluación",
            "Procesamiento del reembolso: 10 días hábiles una vez aprobado",
          ],
        },
        {
          label: "3.3 Métodos de reembolso",
          items: [
            "Reversión a la tarjeta de crédito/débito original",
            "Transferencia bancaria (para pagos en efectivo)",
            "Crédito para futuros servicios (con bonificación del 5%)",
          ],
        },
      ],
    },
    {
      heading: "4. Exclusiones",
      items: [
        "Inasistencia sin cancelación previa",
        "Solicitudes presentadas después de 30 días de la fecha programada",
        "Servicios ya prestados completamente",
        "Cambios de horario solicitados por el paciente (aplica reagendamiento)",
      ],
    },
    {
      heading: "5. Derechos del Consumidor",
      items: [
        "Derecho a información clara sobre condiciones de reembolso antes de la compra",
        "Derecho a presentar reclamos ante la Defensoría del Consumidor",
        "Derecho a mediación gratuita en caso de disputas",
        "Protección contra cláusulas abusivas",
      ],
    },
    {
      heading: "6. Casos Médicos Especiales",
      items: [
        "Exámenes de emergencia: reembolso del 90% si se cancela en las primeras 6 horas",
        "Paquetes de seguimiento: reembolso proporcional del 80% de exámenes no realizados",
      ],
    },
    {
      heading: "7. Procedimientos de Apelación",
      items: [
        "Presentar apelación dentro de 15 días hábiles",
        "Revisión por un comité independiente",
        "Respuesta definitiva en máximo 10 días hábiles",
        "En caso de desacuerdo, acceso a instancias regulatorias competentes",
      ],
    },
    {
      heading: "8. Contacto y Atención al Cliente",
      body: "Horario: Lunes a viernes 7:00 AM – 6:00 PM, sábados 7:00 AM – 12:00 PM\n\nPara emergencias: Línea directa 24/7 disponible para cancelaciones de último momento por causas médicas.",
    },
    {
      heading: "9. Disposiciones Finales",
      items: [
        "Esta política puede modificarse con previo aviso de 30 días a usuarios registrados",
        "Las modificaciones no afectarán servicios ya contratados",
        "En caso de conflicto, prevalecerá la legislación salvadoreña vigente",
        "Esta política complementa y no sustituye los derechos de la Ley de Protección al Consumidor",
      ],
    },
  ],
};

// ─── Sub-component helpers ────────────────────────────────────────────────────
function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-2 space-y-1.5">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-azlab-green-500" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function PolicyCard({
  policy,
}: {
  policy: typeof privacyPolicy | typeof reimbursementPolicy;
}) {
  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <p className="text-sm text-azlab-green-600 font-medium uppercase tracking-wide mb-1">
          {policy.subtitle}
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-azlab-blue-500">
          {policy.title}
        </h2>
        <p className="text-gray-400 text-sm mt-1">{policy.updated}</p>
        <Link
          href={policy.file}
          target="_blank"
          className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-azlab-green-600 hover:text-azlab-green-700 underline underline-offset-4 transition-colors"
        >
          <span className="material-symbols-outlined text-base">
            picture_as_pdf
          </span>
          Descargar PDF original
        </Link>
      </div>

      {/* Sections */}
      <div className="space-y-6">
        {policy.sections.map((section, i) => (
          <div
            key={i}
            className="bg-white rounded-xl border border-gray-100 shadow-sm p-6"
          >
            <h3 className="text-base font-semibold text-azlab-blue-500 mb-3">
              {section.heading}
            </h3>

            {"items" in section && section.items && (
              <BulletList items={section.items} />
            )}

            {"body" in section && section.body && (
              <p className="text-gray-600 text-sm whitespace-pre-line leading-relaxed">
                {section.body}
              </p>
            )}

            {"subSections" in section &&
              section.subSections &&
              section.subSections.map((sub, j) => (
                <div key={j} className="mt-4">
                  <p className="text-sm font-semibold text-azlab-blue-400 mb-1">
                    {sub.label}
                  </p>
                  <BulletList items={sub.items} />
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Politicas() {
  const [activeTab, setActiveTab] = useState<"privacy" | "reimbursement">(
    "privacy",
  );

  return (
    <main className="min-h-screen bg-azlab-blue-50/30">
      {/* Hero banner */}
      <section className="bg-linear-to-b from-azlab-blue-500 to-azlab-blue-600 py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="material-symbols-outlined text-azlab-green-300 text-4xl mb-3 block">
            policy
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Políticas de AZLab
          </h1>
          <p className="text-azlab-blue-100 mt-3 text-base max-w-xl mx-auto">
            Transparencia y cumplimiento legal en todos nuestros procesos.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="flex gap-2 bg-white rounded-xl shadow border border-gray-100 p-1.5 w-fit mx-auto">
          <button
            onClick={() => setActiveTab("privacy")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
              activeTab === "privacy"
                ? "bg-azlab-blue-500 text-white shadow-sm"
                : "text-gray-500 hover:text-azlab-blue-500 hover:bg-azlab-blue-50"
            }`}
          >
            <span className="material-symbols-outlined text-base">lock</span>
            Privacidad
          </button>
          <button
            onClick={() => setActiveTab("reimbursement")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
              activeTab === "reimbursement"
                ? "bg-azlab-blue-500 text-white shadow-sm"
                : "text-gray-500 hover:text-azlab-blue-500 hover:bg-azlab-blue-50"
            }`}
          >
            <span className="material-symbols-outlined text-base">
              currency_exchange
            </span>
            Reembolso
          </button>
        </div>

        {/* Content */}
        <div className="mt-8 pb-16">
          {activeTab === "privacy" ? (
            <PolicyCard policy={privacyPolicy} />
          ) : (
            <PolicyCard policy={reimbursementPolicy} />
          )}
        </div>
      </div>
    </main>
  );
}

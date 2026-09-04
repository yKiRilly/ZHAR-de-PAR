import Link from 'next/link'

export default function PoliticaDePrivacidadPage() {
  return (
    <main className="min-h-screen bg-[#110d0b] px-6 py-20 text-foreground">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/"
          className="mb-10 inline-block text-sm text-primary hover:underline"
        >
          ← Volver a ZHAR de PAR
        </Link>

        <h1 className="font-serif text-4xl font-light text-primary sm:text-5xl">
          Política de Privacidad
        </h1>

        <p className="mt-4 text-sm text-muted-foreground">
          Última actualización: 4 de septiembre de 2026
        </p>

        <div className="mt-10 space-y-10 leading-7 text-muted-foreground">
          <section>
            <h2 className="mb-4 font-serif text-2xl text-foreground">
              1. Responsable del tratamiento
            </h2>

            <div className="rounded-xl border border-primary/20 bg-[#15100e] p-5">
              <p>
                <strong className="text-foreground">
                  Responsable:
                </strong>{' '}
                [NOMBRE O RAZÓN SOCIAL]
              </p>

              <p>
                <strong className="text-foreground">
                  NIF/CIF:
                </strong>{' '}
                [NIF/CIF]
              </p>

              <p>
                <strong className="text-foreground">
                  Dirección:
                </strong>{' '}
                [DIRECCIÓN COMPLETA]
              </p>

              <p>
                <strong className="text-foreground">
                  Email:
                </strong>{' '}
                [EMAIL DEL NEGOCIO]
              </p>

              <p>
                <strong className="text-foreground">
                  Teléfono:
                </strong>{' '}
                +34 601 80 18 00
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-2xl text-foreground">
              2. Datos que recopilamos
            </h2>

            <p>
              Cuando una persona realiza una solicitud de reserva a
              través del sitio web, podemos recopilar los datos
              necesarios para gestionar dicha solicitud, incluyendo:
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>Nombre.</li>
              <li>Número de teléfono.</li>
              <li>Fecha y hora solicitadas.</li>
              <li>Número de personas.</li>
              <li>Servicios seleccionados.</li>
              <li>Información adicional proporcionada voluntariamente.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-2xl text-foreground">
              3. Finalidad del tratamiento
            </h2>

            <p>
              Los datos personales se utilizan principalmente para
              gestionar las reservas, contactar con el cliente en
              relación con su solicitud, confirmar o modificar una
              reserva y prestar los servicios solicitados.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-2xl text-foreground">
              4. Base jurídica
            </h2>

            <p>
              La base jurídica del tratamiento será, según corresponda,
              la ejecución de medidas precontractuales o de un contrato,
              el cumplimiento de obligaciones legales y, cuando sea
              necesario, el consentimiento de la persona interesada.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-2xl text-foreground">
              5. Conservación de los datos
            </h2>

            <p>
              Los datos personales se conservarán durante el tiempo
              necesario para gestionar la reserva y, posteriormente,
              durante los plazos necesarios para atender posibles
              obligaciones legales o responsabilidades derivadas del
              tratamiento.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-2xl text-foreground">
              6. Destinatarios
            </h2>

            <p>
              Los datos podrán ser tratados por proveedores tecnológicos
              necesarios para el funcionamiento del servicio, como
              proveedores de alojamiento, infraestructura y herramientas
              utilizadas para gestionar las reservas, siempre de acuerdo
              con la normativa aplicable.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-2xl text-foreground">
              7. Derechos
            </h2>

            <p>
              La persona interesada puede solicitar el acceso,
              rectificación, supresión, limitación, oposición y, cuando
              corresponda, portabilidad de sus datos personales.
            </p>

            <p className="mt-4">
              Para ejercer estos derechos puede contactar con:
            </p>

            <p className="mt-2 text-foreground">
              [EMAIL DEL NEGOCIO]
            </p>

            <p className="mt-4">
              También puede presentar una reclamación ante la Agencia
              Española de Protección de Datos (AEPD) cuando considere
              que el tratamiento de sus datos no se ajusta a la
              normativa aplicable.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-2xl text-foreground">
              8. Seguridad
            </h2>

            <p>
              Se aplicarán medidas técnicas y organizativas adecuadas
              para proteger los datos personales frente a accesos,
              pérdidas, alteraciones o usos no autorizados.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-2xl text-foreground">
              9. Actualizaciones
            </h2>

            <p>
              Esta Política de Privacidad podrá actualizarse cuando sea
              necesario para adaptarse a cambios legales, técnicos o
              en el funcionamiento del sitio web.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
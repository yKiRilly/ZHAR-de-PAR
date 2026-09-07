import Link from 'next/link'

export default function PoliticaDePrivacidadPage() {
  return (
    <main className="min-h-screen bg-[#110d0b] px-6 py-20 text-foreground">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/"
          className="mb-10 inline-block text-sm text-primary hover:underline"
        >
          â† Volver a ZHAR de PAR
        </Link>

        <h1 className="font-serif text-4xl font-light text-primary sm:text-5xl">
          PolÃ­tica de Privacidad
        </h1>

        <p className="mt-4 text-sm text-muted-foreground">
          Ãšltima actualizaciÃ³n: 4 de septiembre de 2026
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
                [NOMBRE O RAZÃ“N SOCIAL]
              </p>

              <p>
                <strong className="text-foreground">
                  NIF/CIF:
                </strong>{' '}
                [NIF/CIF]
              </p>

              <p>
                <strong className="text-foreground">
                  DirecciÃ³n:
                </strong>{' '}
                [DIRECCIÃ“N COMPLETA]
              </p>

              <p>
                <strong className="text-foreground">
                  Email:
                </strong>{' '}
                [EMAIL DEL NEGOCIO]
              </p>

              <p>
                <strong className="text-foreground">
                  TelÃ©fono:
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
              travÃ©s del sitio web, podemos recopilar los datos
              necesarios para gestionar dicha solicitud, incluyendo:
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>Nombre.</li>
              <li>NÃºmero de telÃ©fono.</li>
              <li>Fecha y hora solicitadas.</li>
              <li>NÃºmero de personas.</li>
              <li>Servicios seleccionados.</li>
              <li>InformaciÃ³n adicional proporcionada voluntariamente.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-2xl text-foreground">
              3. Finalidad del tratamiento
            </h2>

            <p>
              Los datos personales se utilizan principalmente para
              gestionar las reservas, contactar con el cliente en
              relaciÃ³n con su solicitud, confirmar o modificar una
              reserva y prestar los servicios solicitados.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-2xl text-foreground">
              4. Base jurÃ­dica
            </h2>

            <p>
              La base jurÃ­dica del tratamiento serÃ¡, segÃºn corresponda,
              la ejecuciÃ³n de medidas precontractuales o de un contrato,
              el cumplimiento de obligaciones legales y, cuando sea
              necesario, el consentimiento de la persona interesada.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-2xl text-foreground">
              5. ConservaciÃ³n de los datos
            </h2>

            <p>
              Los datos personales se conservarÃ¡n durante el tiempo
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
              Los datos podrÃ¡n ser tratados por proveedores tecnolÃ³gicos
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
              rectificaciÃ³n, supresiÃ³n, limitaciÃ³n, oposiciÃ³n y, cuando
              corresponda, portabilidad de sus datos personales.
            </p>

            <p className="mt-4">
              Para ejercer estos derechos puede contactar con:
            </p>

            <p className="mt-2 text-foreground">
              [EMAIL DEL NEGOCIO]
            </p>

            <p className="mt-4">
              TambiÃ©n puede presentar una reclamaciÃ³n ante la Agencia
              EspaÃ±ola de ProtecciÃ³n de Datos (AEPD) cuando considere
              que el tratamiento de sus datos no se ajusta a la
              normativa aplicable.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-2xl text-foreground">
              8. Seguridad
            </h2>

            <p>
              Se aplicarÃ¡n medidas tÃ©cnicas y organizativas adecuadas
              para proteger los datos personales frente a accesos,
              pÃ©rdidas, alteraciones o usos no autorizados.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-2xl text-foreground">
              9. Actualizaciones
            </h2>

            <p>
              Esta PolÃ­tica de Privacidad podrÃ¡ actualizarse cuando sea
              necesario para adaptarse a cambios legales, tÃ©cnicos o
              en el funcionamiento del sitio web.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}

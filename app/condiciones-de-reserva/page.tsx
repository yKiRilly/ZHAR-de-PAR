import Link from 'next/link'

export default function CondicionesDeReservaPage() {
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
          Condiciones de Reserva
        </h1>

        <p className="mt-4 text-sm text-muted-foreground">
          Última actualización: 4 de septiembre de 2026
        </p>

        <div className="mt-10 space-y-10 leading-7 text-muted-foreground">
          <section>
            <h2 className="mb-4 font-serif text-2xl text-foreground">
              1. Solicitud de reserva
            </h2>

            <p>
              El usuario puede solicitar una reserva a través del
              formulario disponible en el sitio web de ZHAR de PAR.
            </p>

            <p className="mt-4">
              Para realizar una solicitud será necesario proporcionar
              información suficiente para poder contactar con el
              cliente y gestionar la reserva.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-2xl text-foreground">
              2. Alquiler del espacio
            </h2>

            <p>
              El alquiler del espacio de sauna tiene un precio base de
              100 € por hora.
            </p>

            <p className="mt-4">
              La duración mínima de una reserva es de 3 horas.
            </p>

            <p className="mt-4">
              La reserva incluye hasta 8 personas. Cada persona
              adicional tiene un suplemento de 50 €.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-2xl text-foreground">
              3. Disponibilidad
            </h2>

            <p>
              La selección de una fecha y hora en el formulario no
              implica por sí sola una garantía absoluta de disponibilidad
              hasta que la solicitud haya sido registrada y confirmada.
            </p>

            <p className="mt-4">
              El sistema de reservas impide la creación de reservas que
              se solapen con una reserva existente para el mismo espacio
              y horario.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-2xl text-foreground">
              4. Información del cliente
            </h2>

            <p>
              El cliente debe proporcionar información correcta,
              especialmente su nombre y número de teléfono, para que
              ZHAR de PAR pueda comunicarse con él en relación con la
              reserva.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-2xl text-foreground">
              5. Servicios adicionales
            </h2>

            <p>
              Los servicios y productos adicionales seleccionados durante
              la reserva se añadirán al precio final mostrado antes de
              enviar la solicitud.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-2xl text-foreground">
              6. Cancelaciones y modificaciones
            </h2>

            <p>
              Las condiciones concretas de cancelación o modificación
              de una reserva podrán depender de las condiciones
              comunicadas al cliente en el momento de la confirmación.
            </p>

            <p className="mt-4">
              Para solicitar un cambio o cancelación, el cliente deberá
              contactar con ZHAR de PAR utilizando los canales de
              contacto disponibles.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-2xl text-foreground">
              7. Normas de uso
            </h2>

            <p>
              Los clientes deberán utilizar las instalaciones de forma
              responsable y respetar las normas de seguridad, higiene y
              convivencia establecidas por ZHAR de PAR.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-2xl text-foreground">
              8. Contacto
            </h2>

            <p>
              Para cualquier consulta relacionada con una reserva:
            </p>

            <p className="mt-3 text-foreground">
              WhatsApp: +34 601 80 18 00
            </p>

            <p className="mt-2 text-foreground">
              Email: [EMAIL DEL NEGOCIO]
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-2xl text-foreground">
              9. Legislación aplicable
            </h2>

            <p>
              Estas condiciones se regirán por la legislación española
              aplicable.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
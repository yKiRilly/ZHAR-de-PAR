import Link from 'next/link'

export default function PoliticaDeCookiesPage() {
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
          Política de Cookies
        </h1>

        <p className="mt-4 text-sm text-muted-foreground">
          Última actualización: 4 de septiembre de 2026
        </p>

        <div className="mt-10 space-y-10 leading-7 text-muted-foreground">
          <section>
            <h2 className="mb-4 font-serif text-2xl text-foreground">
              1. ¿Qué son las cookies?
            </h2>

            <p>
              Las cookies son pequeños archivos que se almacenan en el
              dispositivo del usuario cuando visita determinados sitios
              web. Pueden utilizarse para permitir el funcionamiento
              técnico de una página, recordar preferencias o recopilar
              información sobre el uso del sitio.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-2xl text-foreground">
              2. Cookies utilizadas por ZHAR de PAR
            </h2>

            <p>
              ZHAR de PAR puede utilizar cookies técnicas o necesarias
              para permitir la correcta navegación y funcionamiento de
              determinadas funcionalidades del sitio web.
            </p>

            <p className="mt-4">
              Actualmente, las cookies no esenciales no deben activarse
              sin obtener previamente el consentimiento del usuario
              cuando dicho consentimiento sea exigible por la normativa
              aplicable.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-2xl text-foreground">
              3. Servicios de terceros
            </h2>

            <p>
              Algunas funcionalidades del sitio pueden enlazar o cargar
              servicios de terceros, como Google Maps, Instagram,
              WhatsApp u otros proveedores.
            </p>

            <p className="mt-4">
              Estos proveedores pueden aplicar sus propias políticas de
              privacidad y cookies.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-2xl text-foreground">
              4. Consentimiento
            </h2>

            <p>
              Cuando se utilicen cookies que requieran consentimiento,
              el usuario podrá aceptar o rechazar dichas cookies antes
              de su instalación, de acuerdo con la normativa aplicable.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-2xl text-foreground">
              5. Configuración del navegador
            </h2>

            <p>
              El usuario puede configurar su navegador para bloquear o
              eliminar cookies. El bloqueo de determinadas cookies
              técnicas puede afectar al funcionamiento de algunas
              funcionalidades del sitio web.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-2xl text-foreground">
              6. Cambios en la política
            </h2>

            <p>
              Esta Política de Cookies podrá actualizarse cuando se
              incorporen nuevas funcionalidades, servicios de terceros
              o cambios normativos.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
import Link from 'next/link'

export default function PoliticaDeCookiesPage() {
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
          PolÃ­tica de Cookies
        </h1>

        <p className="mt-4 text-sm text-muted-foreground">
          Ãšltima actualizaciÃ³n: 4 de septiembre de 2026
        </p>

        <div className="mt-10 space-y-10 leading-7 text-muted-foreground">
          <section>
            <h2 className="mb-4 font-serif text-2xl text-foreground">
              1. Â¿QuÃ© son las cookies?
            </h2>

            <p>
              Las cookies son pequeÃ±os archivos que se almacenan en el
              dispositivo del usuario cuando visita determinados sitios
              web. Pueden utilizarse para permitir el funcionamiento
              tÃ©cnico de una pÃ¡gina, recordar preferencias o recopilar
              informaciÃ³n sobre el uso del sitio.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-2xl text-foreground">
              2. Cookies utilizadas por ZHAR de PAR
            </h2>

            <p>
              ZHAR de PAR puede utilizar cookies tÃ©cnicas o necesarias
              para permitir la correcta navegaciÃ³n y funcionamiento de
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
              Estos proveedores pueden aplicar sus propias polÃ­ticas de
              privacidad y cookies.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-2xl text-foreground">
              4. Consentimiento
            </h2>

            <p>
              Cuando se utilicen cookies que requieran consentimiento,
              el usuario podrÃ¡ aceptar o rechazar dichas cookies antes
              de su instalaciÃ³n, de acuerdo con la normativa aplicable.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-2xl text-foreground">
              5. ConfiguraciÃ³n del navegador
            </h2>

            <p>
              El usuario puede configurar su navegador para bloquear o
              eliminar cookies. El bloqueo de determinadas cookies
              tÃ©cnicas puede afectar al funcionamiento de algunas
              funcionalidades del sitio web.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-2xl text-foreground">
              6. Cambios en la polÃ­tica
            </h2>

            <p>
              Esta PolÃ­tica de Cookies podrÃ¡ actualizarse cuando se
              incorporen nuevas funcionalidades, servicios de terceros
              o cambios normativos.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}

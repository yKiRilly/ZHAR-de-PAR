import Link from 'next/link'

export default function AvisoLegalPage() {
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
          Aviso Legal
        </h1>

        <p className="mt-4 text-sm text-muted-foreground">
          Ãšltima actualizaciÃ³n: 4 de septiembre de 2026
        </p>

        <div className="mt-10 space-y-10 leading-7 text-muted-foreground">
          <section>
            <h2 className="mb-4 font-serif text-2xl text-foreground">
              1. InformaciÃ³n general
            </h2>

            <p>
              De conformidad con la Ley 34/2002, de 11 de julio,
              de Servicios de la Sociedad de la InformaciÃ³n y del
              Comercio ElectrÃ³nico (LSSI-CE), se informa de los
              siguientes datos del titular de este sitio web:
            </p>

            <div className="mt-4 rounded-xl border border-primary/20 bg-[#15100e] p-5">
              <p>
                <strong className="text-foreground">
                  Nombre comercial:
                </strong>{' '}
                ZHAR de PAR
              </p>

              <p>
                <strong className="text-foreground">
                  Titular / RazÃ³n social:
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
                  Domicilio:
                </strong>{' '}
                [DIRECCIÃ“N COMPLETA]
              </p>

              <p>
                <strong className="text-foreground">
                  Localidad:
                </strong>{' '}
                Lloret de Mar, Girona, EspaÃ±a
              </p>

              <p>
                <strong className="text-foreground">
                  TelÃ©fono:
                </strong>{' '}
                +34 601 80 18 00
              </p>

              <p>
                <strong className="text-foreground">
                  Email:
                </strong>{' '}
                [EMAIL DEL NEGOCIO]
              </p>

              <p>
                <strong className="text-foreground">
                  Sitio web:
                </strong>{' '}
                [DOMINIO]
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-2xl text-foreground">
              2. Objeto
            </h2>

            <p>
              El presente sitio web tiene como finalidad proporcionar
              informaciÃ³n sobre los servicios de ZHAR de PAR y permitir
              a los usuarios solicitar reservas de los servicios
              disponibles.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-2xl text-foreground">
              3. Condiciones de uso
            </h2>

            <p>
              El acceso y uso del sitio web atribuye la condiciÃ³n de
              usuario e implica la aceptaciÃ³n de las condiciones
              establecidas en este Aviso Legal.
            </p>

            <p className="mt-4">
              El usuario se compromete a utilizar el sitio web de
              forma lÃ­cita, respetando la legislaciÃ³n vigente y los
              derechos e intereses de terceros.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-2xl text-foreground">
              4. Propiedad intelectual e industrial
            </h2>

            <p>
              Los contenidos del sitio web, incluyendo textos,
              fotografÃ­as, imÃ¡genes, logotipos, diseÃ±o, elementos
              grÃ¡ficos y cÃ³digo, estÃ¡n protegidos por la normativa
              aplicable en materia de propiedad intelectual e industrial.
            </p>

            <p className="mt-4">
              Queda prohibida su reproducciÃ³n, distribuciÃ³n o
              transformaciÃ³n sin la autorizaciÃ³n correspondiente,
              salvo en los casos permitidos por la legislaciÃ³n vigente.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-2xl text-foreground">
              5. Responsabilidad
            </h2>

            <p>
              ZHAR de PAR procura que la informaciÃ³n publicada en el
              sitio web sea correcta y estÃ© actualizada, pero no
              garantiza la ausencia absoluta de errores o interrupciones
              del servicio.
            </p>

            <p className="mt-4">
              El titular no serÃ¡ responsable del uso indebido que
              terceros puedan realizar de los contenidos del sitio web.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-2xl text-foreground">
              6. Enlaces a terceros
            </h2>

            <p>
              El sitio web puede incluir enlaces a servicios o pÃ¡ginas
              de terceros, como Google Maps, Instagram o WhatsApp.
              ZHAR de PAR no controla los contenidos ni las polÃ­ticas
              de privacidad de dichos terceros.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-2xl text-foreground">
              7. LegislaciÃ³n aplicable
            </h2>

            <p>
              La relaciÃ³n entre el titular del sitio web y el usuario
              se regirÃ¡ por la legislaciÃ³n espaÃ±ola aplicable.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}

import Botao1 from "./components/botao1";
import Urgencia from "./components/Urgencia";
import Header from "./components/header";
import Pictures from "./components/pictures";
import RevealOnScroll from "./components/RevealOnScroll";
import Numbers from "./components/numbers";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-black">
      {/* Área original com o background */}
      <div
        className="
          min-h-[120vh]
          overflow-x-hidden
          bg-black
          md:bg-[url('/Initial-Background.png')]
          md:bg-cover
          md:bg-center
          md:bg-no-repeat
        "
      >
        <Header />

        {/* Container principal com o mesmo espaçamento nas laterais */}
        <main
          className="
            hero-enter
            mx-auto
            w-full
            max-w-[1920px]
            px-6
            pt-20

            md:px-[60px]
            md:pt-64

            xl:px-[125px]
          "
        >
          {/* Conteúdo inicial */}
          <div className="max-w-4xl">
            <h1
              className="
                -mt-20
                font-panel
                text-4xl
                leading-[1.05]
                tracking-[-0.03em]
                text-white
                md:text-5xl
              "
            >
              SEU PROCESSO CRIMINAL NÃO PODE ESPERAR.
              <br />
              E VOCÊ NÃO PRECISA PASSAR
              <br />
              POR ISSO SOZINHO(A).
            </h1>

            <p
              className="
                mt-2
                max-w-2xl
                text-base
                leading-relaxed
                text-zinc-300
                md:text-lg
              "
            >
              No <strong>JC Pereira Advocacia</strong>, seu caso é acompanhado
              de perto, com transparência e uma defesa comprometida com os seus
              direitos em cada etapa do processo.
            </p>

            <Botao1 className="mt-8" />
            <Urgencia className="mt-4" />
          </div>

          {/* Seção Quem Somos */}
          <section
            id="quem-somos"
            className="
              mt-24
              flex
              w-full
              flex-col
              items-start
              gap-12

              lg:flex-row
              lg:justify-between

              xl:gap-16
            "
          >
            {/* Imagens alinhadas ao título principal */}
            <Pictures
              className="
                w-full
                max-w-[500px]
                shrink-0

                lg:w-[46%]

                xl:w-[500px]
              "
            />

            {/* Conteúdo alinhado ao limite direito */}
            <div
              className="
                w-full
                min-w-0
                max-w-[520px]

                lg:w-[520px]
                lg:flex-none
              "
            >
              {/* Sobre o escritório */}
              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/15
                  bg-black/20
                  px-3
                  py-2
                  text-[8px]
                  uppercase
                  tracking-[0.12em]
                  text-zinc-300
                "
              >
                <span
                  className="
                    h-2
                    w-2
                    shrink-0
                    rounded-full
                    border-2
                    border-[#5B3E30]
                    bg-[#F7EAE0]
                    blur-[1.3px]
                  "
                />

                SOBRE O ESCRITÓRIO
              </div>

              {/* Título */}
              <h2
                className="
                  mt-4
                  font-panel
                  text-4xl
                  leading-none
                  text-white
                  md:text-5xl
                "
              >
                <span className="block">QUEM</span>
                <span className="block">SOMOS?</span>
              </h2>

              {/* Linha com degradê */}
              <div
                className="mt-4 h-px w-full max-w-[220px]"
                style={{
                  background:
                    "linear-gradient(to right, rgba(234,195,73,1) 0%, rgba(255,255,255,0) 100%)",
                }}
              />

              {/* Parágrafos */}
              <div className="mt-8 w-full space-y-6">
                <p
                  className="
                    w-full
                    text-base
                    leading-8
                    text-zinc-300
                    md:text-lg
                  "
                >
                  Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum.
                </p>

                <p
                  className="
                    w-full
                    text-base
                    leading-8
                    text-zinc-300
                    md:text-lg
                  "
                >
                  Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum.
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* Seção José Carlos */}
      <RevealOnScroll>
      <section
        id="fundador"
        className="
          relative
          w-full
          overflow-hidden
          bg-black
          pt-32
        "
      >
        {/* Nome grande atrás do retângulo */}
        <h2
  className="
    relative
    z-0
    w-full
    whitespace-nowrap
    bg-clip-text
    px-4
    text-center
    font-panel
    text-[clamp(3rem,11vw,10rem)]
    font-bold
    leading-[1.1]
    tracking-[-0.06em]
    text-transparent
  "
  style={{
    backgroundImage:
      "linear-gradient(90deg, #000000 15%, #d9b65f 50%, #000000 85%)",
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
  }}
>
  JOSÉ CARLOS
</h2>

        {/* Área deformada */}
        <div
          className="
            relative
            z-10
            -mt-4
            w-full

            md:-mt-10
          "
        >
          {/* Fundo deformado */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-br
              from-[#191919]
              via-[#121212]
              to-[#090909]

              [clip-path:polygon(0_6%,34%_6%,42%_0,100%_0,100%_100%,0_100%)]

              md:[clip-path:polygon(0_15%,43%_15%,50%_0,100%_0,100%_100%,0_100%)]
            "
          />

          {/* Mesmo container e espaçamento da primeira seção */}
          <div
            className="
              relative
              z-10
              mx-auto
              grid
              w-full
              max-w-[1920px]
              grid-cols-1
              items-center
              gap-14
              px-6
              pb-24
              pt-32

              md:px-[60px]
              md:pt-44

              lg:grid-cols-[0.8fr_1.2fr]
              lg:gap-20
              lg:pt-40

              xl:px-[125px]
            "
          >
            {/* Texto alinhado ao título principal */}
            <div
            className="
              w-full
              max-w-[460px]
              pt-8
              md:pt-10
              lg:pt-14
            "
          >
              {/* Etiqueta */}
              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/15
                  bg-black/20
                  px-3
                  py-2
                  text-[8px]
                  uppercase
                  tracking-[0.12em]
                  text-zinc-300
                "
              >
                <span
                  className="
                    h-2
                    w-2
                    shrink-0
                    rounded-full
                    border-2
                    border-[#5B3E30]
                    bg-[#F7EAE0]
                    blur-[1.3px]
                  "
                />

                SOBRE O FUNDADOR
              </div>

              {/* Título */}
              <h3
                className="
                  mt-7
                  max-w-[430px]
                  font-panel
                  text-3xl
                  font-normal
                  uppercase
                  leading-[1.05]
                  tracking-[-0.03em]
                  text-white

                  md:text-4xl
                  lg:text-[42px]
                "
              >
                À FRENTE DO ESCRITÓRIO
                <br />
                ESTÁ JOSÉ CARLOS
              </h3>

              {/* Linha dourada */}
              <div
                className="
                  mt-5
                  h-px
                  w-full
                  max-w-[250px]
                  bg-gradient-to-r
                  from-[#EAC449]
                  to-transparent
                "
              />

              {/* Textos */}
              <div
                className="
                  mt-7
                  max-w-[430px]
                  space-y-6
                  text-sm
                  leading-6
                  text-zinc-300

                  md:text-base
                  md:leading-7
                "
              >
                <p>
                  José Carlos está à frente do escritório, conduzindo cada
                  atendimento com seriedade, transparência e atenção
                  individualizada às necessidades de cada cliente.
                </p>

                <p>
                  Sua atuação é pautada na análise cuidadosa de cada situação,
                  na construção de estratégias jurídicas responsáveis e na
                  defesa firme dos direitos de seus clientes.
                </p>

                <p>
                  Mais do que acompanhar processos, o escritório busca oferecer
                  orientação clara e segurança em momentos que exigem
                  experiência, dedicação e compromisso.
                </p>
              </div>
            </div>

            {/* Imagens alinhadas ao limite direito da primeira seção */}
            <div
              className="
                relative
                mx-auto
                h-[510px]
                w-full
                max-w-[720px]

                sm:h-[600px]

                lg:mx-0
                lg:h-[600px]
                lg:justify-self-end
              "
            >
              {/* Imagem principal */}
              <div
                className="
                  absolute
                  right-0
                  top-0
                  h-[450px]
                  w-[78%]
                  overflow-hidden
                  rounded-[28px]

                  sm:h-[560px]
                  sm:w-[70%]

                  lg:h-[600px]
                  lg:w-[68%]
                "
              >
                <img
                  src="/dr3.png"
                  alt="José Carlos"
                  className="
                    h-full
                    w-full
                    object-cover
                    object-top
                  "
                />

                {/* Detalhe no canto superior */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    right-0
                    top-0
                    h-16
                    w-16
                    bg-[#d8cba2]

                    [clip-path:polygon(100%_0,100%_100%,0_0)]

                    sm:h-20
                    sm:w-20
                  "
                />

                {/* Sombra suave */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/25
                    via-transparent
                    to-transparent
                  "
                />
              </div>

              {/* Foto preta e branca superior */}
              <div
                className="
                  absolute
                  left-0
                  top-[105px]
                  z-20
                  h-[145px]
                  w-[60%]
                  overflow-hidden
                  rounded-sm
                  bg-zinc-100
                  shadow-2xl

                  sm:top-[145px]
                  sm:h-[190px]
                  sm:w-[55%]

                  lg:top-[150px]
                  lg:h-[195px]
                "
              >
                <img
                  src="/pb1.png"
                  alt="José Carlos"
                  className="
                    h-full
                    w-full
                    object-cover
                    object-top
                    grayscale
                  "
                />
              </div>

              {/* Foto preta e branca inferior */}
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  z-20
                  h-[145px]
                  w-[60%]
                  overflow-hidden
                  rounded-sm
                  bg-zinc-100
                  shadow-2xl

                  sm:h-[190px]
                  sm:w-[55%]

                  lg:h-[195px]
                "
              >
                <img
                  src="/pb2.png"
                  alt="José Carlos"
                  className="
                    h-full
                    w-full
                    object-cover
                    object-top
                    grayscale
                  "
                />
              </div>
            </div>
          </div>
           <Numbers />
        </div>
      </section>
      </RevealOnScroll>

      
    </div>
  );
}
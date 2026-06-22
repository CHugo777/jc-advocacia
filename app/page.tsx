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
              via-[#090909]
              to-[#000000]

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


        {/* Seção Fases do Processo */}
      <RevealOnScroll>
        <section
          id="fases"
          className="
            relative
            w-full
            overflow-hidden
            bg-black
            py-28

            md:py-36
          "
        >
          <div
            className="
              mx-auto
              grid
              w-full
              max-w-[1920px]
              grid-cols-1
              gap-14
              px-6

              md:px-[60px]

              lg:grid-cols-[0.9fr_1.1fr]
              lg:items-start
              lg:gap-20

              xl:px-[125px]
            "
          >
            {/* Texto da esquerda */}
            <div
              className="
                w-full
                max-w-[430px]

                lg:sticky
                lg:top-40
              "
            >
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

                FASES DO PROCESSO
              </div>

              <h2
                className="
                  mt-5
                  font-panel
                  text-4xl
                  font-normal
                  uppercase
                  leading-[1.02]
                  tracking-[-0.04em]
                  text-white

                  md:text-5xl
                  lg:text-[54px]
                "
              >
                CUIDAMOS DO
                <br />
                SEU CASO DO
                <br />
                INÍCIO AO FIM.
              </h2>

              <div
                className="
                  mt-5
                  h-px
                  w-full
                  max-w-[210px]
                  bg-gradient-to-r
                  from-[#EAC449]
                  to-transparent
                "
              />
            </div>

            {/* Timeline da direita */}
            <div
              className="
                relative
                w-full
                max-w-[560px]

                lg:ml-auto
              "
            >
              <div
                className="
                  absolute
                  left-[14px]
                  top-5
                  h-[calc(100%-70px)]
                  w-px
                  bg-gradient-to-b
                  from-[#EAC449]
                  via-white/20
                  to-transparent
                "
              />

              {[
                {
                  passo: "PASSO 01",
                  titulo: "PRIMEIRO CONTATO",
                  texto:
                    "Você entra em contato com o escritório, explica brevemente sua situação e recebe as primeiras orientações.",
                },
                {
                  passo: "PASSO 02",
                  titulo: "TRIAGEM",
                  texto:
                    "Seu caso é analisado e é feita uma primeira avaliação para entender a urgência e o caminho inicial.",
                },
                {
                  passo: "PASSO 03",
                  titulo: "CONSULTA",
                  texto:
                    "Agendamos uma conversa para compreender todos os detalhes, esclarecer dúvidas e avaliar as melhores possibilidades de atuação.",
                },
                {
                  passo: "PASSO 04",
                  titulo: "PROPOSTA",
                  texto:
                    "Você recebe uma proposta de atendimento com os serviços, prazos e honorários explicados com clareza.",
                },
                {
                  passo: "PASSO 05",
                  titulo: "CONTRATO",
                  texto:
                    "Após sua aprovação, enviamos tudo de forma organizada para formalizar o atendimento com segurança e transparência.",
                },
                {
                  passo: "PASSO 06",
                  titulo: "ACOMPANHAMENTO",
                  texto:
                    "Com o contrato assinado, o escritório acompanha seu caso e mantém você informado sobre as próximas etapas.",
                },
              ].map((fase) => (
                <div
                  key={fase.passo}
                  className="
                    relative
                    pb-5
                    pl-10

                    last:pb-0
                  "
                >
                  {/* Bolinha da timeline */}
                  <span
                    className="
                      absolute
                      left-0
                      top-1
                      z-10
                      flex
                      h-7
                      w-7
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#EAC449]/60
                      bg-[#F7EAE0]
                      shadow-[0_0_18px_rgba(234,196,73,0.35)]
                    "
                  >
                    <span
                      className="
                        h-2
                        w-2
                        rounded-full
                        bg-[#5B3E30]
                      "
                    />
                  </span>

                  {/* Card */}
                  <article
                    className="
                      min-h-[120px]
                      rounded-xl
                      border
                      border-white/10
                      bg-[#1A1716]/95
                      px-5
                      py-5
                      shadow-[0_18px_40px_rgba(0,0,0,0.35)]
                      backdrop-blur-sm

                      md:px-6
                    "
                  >
                    <span
                      className="
                        text-[9px]
                        font-medium
                        uppercase
                        tracking-[0.12em]
                        text-zinc-400
                      "
                    >
                      {fase.passo}
                    </span>

                    <h3
                      className="
                        mt-1
                        font-panel
                        text-xl
                        font-normal
                        uppercase
                        leading-none
                        tracking-[-0.03em]
                        text-[#EAC449]

                        md:text-2xl
                      "
                    >
                      {fase.titulo}
                    </h3>

                    <div
                      className="
                        mt-3
                        h-px
                        w-full
                        bg-gradient-to-r
                        from-[#EAC449]/70
                        to-transparent
                      "
                    />

                    <p
                      className="
                        mt-3
                        max-w-[390px]
                        text-xs
                        leading-5
                        text-zinc-300

                        md:text-sm
                        md:leading-6
                      "
                    >
                      {fase.texto}
                    </p>
                  </article>
                </div>
              ))}

              <Botao1 className="ml-10 mt-5" />
            </div>
          </div>
        </section>
      </RevealOnScroll>

            {/* Seção Processo Criminal Tem Fases */}
      <RevealOnScroll>
        <section
          id="fases-detalhes"
          className="
            relative
            w-full
            overflow-hidden
            bg-[#11100E]
            pb-28
            pt-28

            md:pb-36
            md:pt-32
          "
          style={{
            background:
              "radial-gradient(circle at center, rgba(234,196,73,0.10) 0%, rgba(17,16,14,0) 42%), linear-gradient(180deg, #17130F 0%, #090909 100%)",
          }}
        >
          {/* Recorte superior arredondado */}
          <div
            className="
              pointer-events-none
              absolute
              left-0
              top-0
              z-0
              h-24
              w-[47%]
              rounded-br-[70px]
              bg-black

              md:h-32
              md:rounded-br-[110px]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              right-0
              top-0
              z-0
              h-24
              w-[47%]
              rounded-bl-[70px]
              bg-black

              md:h-32
              md:rounded-bl-[110px]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-0
              z-0
              h-20
              w-20
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-black

              md:h-24
              md:w-24
            "
          />

          <div
            className="
              relative
              z-10
              mx-auto
              w-full
              max-w-[1920px]
              px-6

              md:px-[60px]

              xl:px-[125px]
            "
          >
            {/* Ícone central do topo */}
            <div
              className="
                mx-auto
                mb-20
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-full
                border
                border-[#EAC449]/60
                bg-black/30
                text-[#EAC449]
                shadow-[0_0_18px_rgba(234,196,73,0.25)]
              "
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#EAC449]" />
            </div>

            {/* Etiqueta */}
            <div className="flex justify-center">
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

                CONHEÇA AS FASES DO PROCESSO CRIMINAL
              </div>
            </div>

            {/* Título */}
            <div
              className="
                mx-auto
                mt-10
                flex
                w-full
                max-w-[1000px]
                items-center
                justify-center
                gap-4
              "
            >
              <div
                className="
                  h-px
                  flex-1
                  bg-gradient-to-l
                  from-white/35
                  to-transparent
                "
              />

              <h2
                className="
                  text-center
                  font-panel
                  text-xl
                  font-normal
                  uppercase
                  leading-none
                  tracking-[-0.03em]
                  text-white

                  md:text-2xl
                "
              >
                UM PROCESSO CRIMINAL TEM FASES.
              </h2>

              <div
                className="
                  h-px
                  flex-1
                  bg-gradient-to-r
                  from-white/35
                  to-transparent
                "
              />
            </div>

            <p
              className="
                mx-auto
                mt-5
                max-w-[950px]
                text-center
                text-xs
                leading-5
                text-zinc-300

                md:text-sm
                md:leading-6
              "
            >
              Conhecê-las desde o início permite agir com mais precisão,
              antecipar movimentos e defender os seus direitos com mais
              eficácia. A diferença entre contratar um advogado agora ou depois
              pode determinar o que ainda é possível fazer.
            </p>

            {/* Desktop */}
            <div
              className="
                relative
                mx-auto
                mt-20
                hidden
                min-h-[360px]
                w-full
                max-w-[1500px]
                grid-cols-6
                items-center

                lg:grid
              "
            >
              <div
                className="
                  absolute
                  left-[7%]
                  right-[7%]
                  top-1/2
                  h-[5px]
                  -translate-y-1/2
                  rounded-full
                  bg-[#E8D7B1]
                "
              />

              {[
                {
                  titulo: "Fase Policial",
                  texto:
                    "Inquérito, oitivas, reconhecimento, prisões em flagrante. A defesa precisa atuar desde cedo para evitar nulidades e uma futura acusação.",
                  posicao: "top",
                  icon: (
                    <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none">
                      <path
                        d="M12 15.5A3.5 3.5 0 1 0 12 8a3.5 3.5 0 0 0 0 7.5Z"
                        stroke="currentColor"
                        strokeWidth="1.7"
                      />
                      <path
                        d="M19 12a7 7 0 0 1-.1 1.1l2 1.5-2 3.4-2.4-1a7.8 7.8 0 0 1-1.8 1l-.3 2.6h-4L10 18a7.8 7.8 0 0 1-1.8-1l-2.4 1-2-3.4 2-1.5A7 7 0 0 1 5.7 12c0-.4 0-.8.1-1.1l-2-1.5 2-3.4 2.4 1a7.8 7.8 0 0 1 1.8-1l.3-2.6h4l.3 2.6a7.8 7.8 0 0 1 1.8 1l2.4-1 2 3.4-2 1.5c.1.3.2.7.2 1.1Z"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ),
                },
                {
                  titulo: "Ação Penal",
                  texto:
                    "Denúncia recebida, resposta à acusação e produção de provas. A defesa técnica é estratégica, contestando acusações e construindo cada etapa com rigor técnico.",
                  posicao: "bottom",
                  icon: (
                    <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none">
                      <path
                        d="M7 3h7l4 4v14H7V3Z"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14 3v5h4"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9.5 12h5M9.5 15h5M9.5 18h3"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                      />
                    </svg>
                  ),
                },
                {
                  titulo: "Habeas Corpus",
                  texto:
                    "Prisão ilegal, excesso de prazo, constrangimento ilegal. A defesa identifica a ilegalidade e age com rapidez para buscar a liberdade.",
                  posicao: "top",
                  icon: (
                    <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none">
                      <path
                        d="M9 11v-1a3 3 0 0 1 6 0v1"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                      />
                      <path
                        d="M8 11h8v8H8v-8Z"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM19 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
                        stroke="currentColor"
                        strokeWidth="1.7"
                      />
                    </svg>
                  ),
                },
                {
                  titulo: "Tribunal do Júri",
                  texto:
                    "Crimes dolosos contra a vida exigem estratégia própria. A defesa precisa atuar desde as fases iniciais e técnicas até o plenário.",
                  posicao: "bottom",
                  icon: (
                    <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none">
                      <path
                        d="M4 20h16M5 17h14M7 9h10M6 12h12M12 4l8 4H4l8-4Z"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8 12v5M12 12v5M16 12v5"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                      />
                    </svg>
                  ),
                },
                {
                  titulo: "Fase Recursal",
                  texto:
                    "Sentença proferida. O processo ainda não acabou. A defesa analisa vícios, provas e teses perante o Tribunal de Justiça, STJ ou STF.",
                  posicao: "top",
                  icon: (
                    <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none">
                      <path
                        d="M7 3h7l4 4v14H7V3Z"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14 3v5h4"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinejoin="round"
                      />
                      <path
                        d="m11 16 2 2 4-5"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ),
                },
                {
                  titulo: "Execução Penal",
                  texto:
                    "Progressão de regime, livramento condicional, remição, indulto. A defesa atua ao longo da pena ou provisão no interesse do cliente.",
                  posicao: "bottom",
                  icon: (
                    <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none">
                      <path
                        d="M8 11V8a4 4 0 0 1 8 0v3"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                      />
                      <path
                        d="M6 11h12v10H6V11Z"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 16v2"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                      />
                    </svg>
                  ),
                },
              ].map((fase) => (
                <div key={fase.titulo} className="relative h-[360px]">
                  {fase.posicao === "top" && (
                    <div
                      className="
                        absolute
                        bottom-[calc(50%+68px)]
                        left-1/2
                        w-[210px]
                        -translate-x-1/2
                        text-left
                      "
                    >
                      <h3
                        className="
                          font-panel
                          text-3xl
                          leading-none
                          tracking-[-0.04em]
                          text-white
                        "
                      >
                        {fase.titulo}
                      </h3>

                      <p
                        className="
                          mt-2
                          text-[10px]
                          leading-4
                          text-zinc-300
                        "
                      >
                        {fase.texto}
                      </p>
                    </div>
                  )}

                  <div
                    className="
                      absolute
                      left-1/2
                      top-1/2
                      z-10
                      -translate-x-1/2
                      -translate-y-1/2
                    "
                  >
                    <div
                      className="
                        relative
                        z-10
                        flex
                        h-24
                        w-24
                        items-center
                        justify-center
                        rounded-full
                        border-[6px]
                        border-[#E8D7B1]
                        bg-[#F7F4EC]
                        text-[#777777]
                        shadow-[0_18px_35px_rgba(0,0,0,0.35)]
                      "
                    >
                      {fase.icon}
                    </div>
                  </div>

                  {fase.posicao === "bottom" && (
                    <div
                      className="
                        absolute
                        left-1/2
                        top-[calc(50%+68px)]
                        w-[210px]
                        -translate-x-1/2
                        text-left
                      "
                    >
                      <h3
                        className="
                          font-panel
                          text-3xl
                          leading-none
                          tracking-[-0.04em]
                          text-white
                        "
                      >
                        {fase.titulo}
                      </h3>

                      <p
                        className="
                          mt-2
                          text-[10px]
                          leading-4
                          text-zinc-300
                        "
                      >
                        {fase.texto}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile / Tablet */}
            <div
              className="
                mt-14
                grid
                gap-5

                lg:hidden
              "
            >
              {[
                {
                  titulo: "Fase Policial",
                  texto:
                    "Inquérito, oitivas, reconhecimento, prisões em flagrante. A defesa precisa atuar desde cedo para evitar nulidades e uma futura acusação.",
                },
                {
                  titulo: "Ação Penal",
                  texto:
                    "Denúncia recebida, resposta à acusação e produção de provas. A defesa técnica é estratégica, contestando acusações e construindo cada etapa com rigor técnico.",
                },
                {
                  titulo: "Habeas Corpus",
                  texto:
                    "Prisão ilegal, excesso de prazo, constrangimento ilegal. A defesa identifica a ilegalidade e age com rapidez para buscar a liberdade.",
                },
                {
                  titulo: "Tribunal do Júri",
                  texto:
                    "Crimes dolosos contra a vida exigem estratégia própria. A defesa precisa atuar desde as fases iniciais e técnicas até o plenário.",
                },
                {
                  titulo: "Fase Recursal",
                  texto:
                    "Sentença proferida. O processo ainda não acabou. A defesa analisa vícios, provas e teses perante o Tribunal de Justiça, STJ ou STF.",
                },
                {
                  titulo: "Execução Penal",
                  texto:
                    "Progressão de regime, livramento condicional, remição, indulto. A defesa atua ao longo da pena ou provisão no interesse do cliente.",
                },
              ].map((fase, index) => (
                <article
                  key={fase.titulo}
                  className="
                    flex
                    gap-4
                    rounded-2xl
                    border
                    border-white/10
                    bg-black/25
                    p-5
                    backdrop-blur-sm
                  "
                >
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border-4
                      border-[#E8D7B1]
                      bg-[#F7F4EC]
                      font-panel
                      text-lg
                      text-[#5B3E30]
                    "
                  >
                    {index + 1}
                  </div>

                  <div>
                    <h3
                      className="
                        font-panel
                        text-2xl
                        leading-none
                        tracking-[-0.04em]
                        text-white
                      "
                    >
                      {fase.titulo}
                    </h3>

                    <p
                      className="
                        mt-2
                        text-xs
                        leading-5
                        text-zinc-300
                      "
                    >
                      {fase.texto}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            {/* Botão */}
            <div className="mt-16 flex flex-col items-center">
              <Botao1 />

              <Urgencia className="mt-3" />
            </div>
          </div>
        </section>
      </RevealOnScroll>
      
                    {/* Seção Atendimento RJ */}
      <RevealOnScroll>
        <section
          id="atendimento"
          className="
            relative
            w-full
            overflow-hidden
            bg-black
            py-28

            md:py-36
          "
        >
          {/* Palavra grande no fundo */}
          <h2
            className="
              pointer-events-none
              absolute
              left-1/2
              top-4
              z-0
              w-full
              -translate-x-1/2
              text-center
              font-panel
              text-[clamp(4rem,14vw,15rem)]
              font-bold
              uppercase
              leading-none
              tracking-[-0.08em]
              text-transparent
            "
            style={{
              backgroundImage:
                "linear-gradient(90deg, #000000 10%, #d9b65f 50%, #000000 90%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
            }}
          >
            ATENDIMENTO
          </h2>

          {/* Fundo arredondado */}
          <div
            className="
              pointer-events-none
              absolute
              left-0
              top-24
              z-0
              h-full
              w-full
              rounded-t-[48px]
              bg-gradient-to-br
              from-[#201C18]
              via-[#141312]
              to-[#080808]

              md:top-32
              md:rounded-t-[90px]
            "
          />

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
              gap-16
              px-6
              pt-20

              md:px-[60px]
              md:pt-28

              lg:grid-cols-[0.85fr_1.15fr]
              lg:gap-20

              xl:px-[125px]
            "
          >
            {/* Texto */}
            <div className="w-full max-w-[520px]">
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

                ATENDIMENTO
              </div>

              <h3
                className="
                  mt-7
                  font-panel
                  text-4xl
                  font-normal
                  uppercase
                  leading-[1.05]
                  tracking-[-0.04em]
                  text-white

                  md:text-5xl
                "
              >
                ATENDIMENTO EM
                <br />
                TODO O RIO DE JANEIRO.
              </h3>

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

              <div
                className="
                  mt-7
                  space-y-6
                  text-base
                  leading-7
                  text-zinc-300

                  md:text-lg
                  md:leading-8
                "
              >
                <p>
                  Seja em Itaboraí, Cabo Frio ou em qualquer cidade do estado do
                  Rio de Janeiro, o atendimento é feito de forma próxima, clara
                  e comprometida com o seu caso.
                </p>

                <p>
                  Você fala diretamente com o advogado responsável, acompanha
                  cada etapa do processo e recebe orientação com segurança.
                </p>

                <p>
                  Para situações urgentes, o plantão de atendimento está
                  disponível 24 horas.
                </p>
              </div>

              <Botao1 className="mt-9" />

              <Urgencia className="mt-4" />
            </div>

            {/* Mapa do RJ */}
            <div
              className="
                relative
                mx-auto
                flex
                min-h-[420px]
                w-full
                max-w-[850px]
                items-center
                justify-center

                md:min-h-[560px]

                lg:mx-0
                lg:justify-self-end
              "
            >
              {/* Brilho atrás do mapa */}
              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-[360px]
                  w-[360px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-[#EAC449]/10
                  blur-[90px]

                  md:h-[520px]
                  md:w-[520px]
                "
              />

              <svg
                viewBox="0 0 1024 620"
                className="
                  relative
                  z-10
                  h-auto
                  w-full
                  max-w-[850px]
                  drop-shadow-[0_30px_70px_rgba(0,0,0,0.55)]
                "
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Linhas de atendimento pelo RJ */}
                <g stroke="#D9C8A4" strokeWidth="1.6" opacity="0.7">
                  <path d="M625 430 C520 330 395 310 240 350" />
                  <path d="M625 430 C545 270 555 155 680 75" />
                  <path d="M625 430 C670 275 770 170 910 165" />
                  <path d="M625 430 C720 360 810 340 960 305" />
                  <path d="M625 430 C515 445 390 465 235 500" />
                  <path d="M830 420 C740 390 690 400 625 430" />
                  <path d="M830 420 C875 390 915 365 965 340" />
                </g>

                {/* Estado do Rio de Janeiro - formato estilizado */}
                <path
                  d="
                    M32 438
                    C54 412 87 394 124 390
                    C160 386 188 371 219 356
                    C260 336 305 335 343 316
                    C382 296 420 279 459 258
                    C500 236 522 204 545 160
                    C568 116 603 80 651 72
                    C695 65 719 34 760 22
                    C806 8 855 22 878 62
                    C897 95 889 132 914 158
                    C939 184 980 188 998 226
                    C1017 266 998 307 963 329
                    C923 354 892 365 866 403
                    C837 445 802 472 748 479
                    C701 485 658 489 621 521
                    C584 553 534 580 480 564
                    C436 551 399 524 346 530
                    C300 535 262 519 223 504
                    C184 489 151 511 111 515
                    C66 520 29 491 19 460
                    C16 451 22 444 32 438
                    Z
                  "
                  fill="#604631"
                  opacity="0.96"
                />

                {/* Recorte / baía estilizada */}
                <path
                  d="
                    M485 557
                    C515 525 541 494 577 477
                    C606 463 634 454 661 432
                    C628 445 603 451 574 446
                    C544 440 515 454 493 480
                    C468 511 456 540 485 557
                    Z
                  "
                  fill="#191817"
                  opacity="0.95"
                />

                {/* Linha litorânea */}
                <path
                  d="
                    M111 515
                    C151 511 184 489 223 504
                    C262 519 300 535 346 530
                    C399 524 436 551 480 564
                    C534 580 584 553 621 521
                    C658 489 701 485 748 479
                    C802 472 837 445 866 403
                    C892 365 923 354 963 329
                  "
                  stroke="#E8D7B1"
                  strokeWidth="2"
                  opacity="0.55"
                />

                {/* Divisões internas decorativas */}
                <g stroke="#E8D7B1" strokeWidth="1" opacity="0.22">
                  <path d="M180 395 C230 415 270 430 322 428" />
                  <path d="M270 350 C300 390 320 440 346 530" />
                  <path d="M390 292 C425 350 450 410 480 564" />
                  <path d="M545 160 C590 230 610 330 625 430" />
                  <path d="M651 72 C690 170 700 300 680 455" />
                  <path d="M760 22 C785 130 810 245 866 403" />
                  <path d="M878 62 C845 150 835 260 830 420" />
                  <path d="M963 329 C900 315 825 325 760 360" />
                  <path d="M748 479 C705 430 665 410 625 430" />
                  <path d="M459 258 C500 315 540 380 574 446" />
                  <path d="M343 316 C370 365 395 440 399 524" />
                </g>

                {/* Pontos de cobertura */}
                <g>
                  <circle
                    cx="625"
                    cy="430"
                    r="14"
                    fill="#F7EAE0"
                    stroke="#EAC449"
                    strokeWidth="4"
                  />
                  <circle cx="625" cy="430" r="5" fill="#5B3E30" />
                </g>

                <g>
                  <circle
                    cx="830"
                    cy="420"
                    r="14"
                    fill="#F7EAE0"
                    stroke="#EAC449"
                    strokeWidth="4"
                  />
                  <circle cx="830" cy="420" r="5" fill="#5B3E30" />
                </g>

                {/* Linha entre Itaboraí e Cabo Frio */}
                <path
                  d="M641 427 C700 392 765 395 815 417"
                  stroke="#F7EAE0"
                  strokeWidth="2"
                  strokeDasharray="8 8"
                  opacity="0.85"
                />

                {/* Nome Itaboraí */}
                <g>
                  <rect
                    x="470"
                    y="385"
                    width="135"
                    height="38"
                    rx="19"
                    fill="#080808"
                    fillOpacity="0.65"
                    stroke="white"
                    strokeOpacity="0.16"
                  />
                  <text
                    x="537"
                    y="409"
                    textAnchor="middle"
                    fill="#F7F4EC"
                    fontSize="17"
                    fontFamily="Arial, sans-serif"
                  >
                    Itaboraí
                  </text>
                </g>

                {/* Nome Cabo Frio */}
                <g>
                  <rect
                    x="850"
                    y="382"
                    width="145"
                    height="38"
                    rx="19"
                    fill="#080808"
                    fillOpacity="0.65"
                    stroke="white"
                    strokeOpacity="0.16"
                  />
                  <text
                    x="922"
                    y="406"
                    textAnchor="middle"
                    fill="#F7F4EC"
                    fontSize="17"
                    fontFamily="Arial, sans-serif"
                  >
                    Cabo Frio
                  </text>
                </g>
              </svg>

              {/* Card */}
              <div
                className="
                  absolute
                  bottom-2
                  right-0
                  z-20
                  w-full
                  max-w-[360px]
                  rounded-2xl
                  border
                  border-white/15
                  bg-black/45
                  p-4
                  text-zinc-300
                  shadow-[0_18px_45px_rgba(0,0,0,0.45)]
                  backdrop-blur-md

                  md:bottom-10
                  md:right-4
                "
              >
                <div className="flex items-center gap-3">
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/20
                      text-xl
                      text-[#EAC449]
                    "
                  >
                    +
                  </div>

                  <div>
                    <p
                      className="
                        text-[10px]
                        uppercase
                        tracking-[0.16em]
                        text-[#EAC449]
                      "
                    >
                      Sedes
                    </p>

                    <p className="mt-1 text-sm leading-5 text-zinc-200">
                      Itaboraí e Cabo Frio, com atendimento em todo o RJ.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </RevealOnScroll>

            {/* Seção FAQ */}
      <RevealOnScroll>
        <section
          id="duvidas"
          className="
            relative
            w-full
            overflow-hidden
            bg-black
            py-28

            md:py-36
          "
        >
          <div
            className="
              relative
              z-10
              mx-auto
              w-full
              max-w-[1920px]
              px-6

              md:px-[60px]

              xl:px-[125px]
            "
          >
            {/* Etiqueta */}
            <div className="flex justify-center">
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

                A SUA DÚVIDA PODE ESTAR AQUI
              </div>
            </div>

            {/* Título */}
            <div
              className="
                mx-auto
                mt-8
                flex
                w-full
                max-w-[1000px]
                items-center
                justify-center
                gap-5
              "
            >
              <div
                className="
                  h-px
                  flex-1
                  bg-gradient-to-l
                  from-[#EAC449]/60
                  to-transparent
                "
              />

              <h2
                className="
                  text-center
                  font-panel
                  text-3xl
                  font-normal
                  uppercase
                  leading-none
                  tracking-[-0.04em]
                  text-white

                  md:text-4xl
                "
              >
                FAQ | PERGUNTAS FREQUENTES
              </h2>

              <div
                className="
                  h-px
                  flex-1
                  bg-gradient-to-r
                  from-[#EAC449]/60
                  to-transparent
                "
              />
            </div>

            {/* Lista */}
            <div
              className="
                mx-auto
                mt-10
                w-full
                max-w-[980px]
                space-y-4
              "
            >
              {[
                {
                  pergunta: "Vocês atendem fora de Itaboraí e Cabo Frio?",
                  resposta:
                    "Sim. O atendimento pode ser feito de forma totalmente online para clientes em qualquer cidade do Rio de Janeiro.",
                },
                {
                  pergunta: "Vocês pegam casos em andamento?",
                  resposta:
                    "Sim. É possível assumir a defesa em qualquer fase do processo.",
                },
                {
                  pergunta: "E em casos de urgência, como prisão em flagrante?",
                  resposta:
                    "Entre em contato imediatamente. O atendimento para urgências está disponível 24 horas.",
                },
                {
                  pergunta: "Como funciona o primeiro contato?",
                  resposta:
                    "Você entra em contato pelo WhatsApp com um breve relato da situação. O caso passa por uma triagem e você recebe as primeiras orientações.",
                },
                {
                  pergunta: "É importante ter advogado no interrogatório?",
                  resposta:
                    "Sim. A orientação jurídica antes e durante o interrogatório faz diferença direta no resultado do processo. Nenhuma declaração deve ser feita sem defesa presente.",
                },
                {
                  pergunta: "Como serei informado sobre o andamento do processo?",
                  resposta:
                    "Após a contratação, você recebe atualizações diretas em cada movimentação relevante do processo.",
                },
              ].map((item, index) => (
                <details
                  key={item.pergunta}
                  open={index === 0}
                  className="
                    group
                    rounded-lg
                    border
                    border-white/10
                    bg-[#171514]/95
                    px-5
                    py-5
                    shadow-[0_18px_45px_rgba(0,0,0,0.28)]
                    transition-all
                    duration-300
                    open:border-white/15
                    open:bg-[#1D1A18]/95

                    md:px-6
                  "
                >
                  <summary
                    className="
                      flex
                      cursor-pointer
                      list-none
                      items-center
                      justify-between
                      gap-4
                    "
                  >
                    <h3
                      className="
                        text-sm
                        font-semibold
                        leading-5
                        text-white

                        md:text-base
                      "
                    >
                      {String(index + 1).padStart(2, "0")} | {item.pergunta}
                    </h3>

                    <span
                      className="
                        flex
                        h-6
                        w-6
                        shrink-0
                        items-center
                        justify-center
                        text-zinc-300
                        transition-transform
                        duration-300
                        group-open:rotate-180
                      "
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="h-4 w-4"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 9L12 15L18 9"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </summary>

                  <p
                    className="
                      mt-5
                      max-w-[760px]
                      text-sm
                      leading-6
                      text-zinc-300

                      md:text-[15px]
                      md:leading-7
                    "
                  >
                    {item.resposta}
                  </p>
                </details>
              ))}
            </div>

            {/* Botão */}
            <div className="mt-14 flex flex-col items-center">
              <Botao1 />

              <Urgencia className="mt-4" />
            </div>
          </div>
        </section>
      </RevealOnScroll>

            {/* Footer / Contatos */}
      <footer
        id="contato"
        className="
          relative
          w-full
          overflow-hidden
          bg-black
          py-16

          md:py-20
        "
      >
        <div
          className="
            mx-auto
            grid
            w-full
            max-w-[1920px]
            grid-cols-1
            gap-12
            px-6

            md:px-[60px]

            lg:grid-cols-[1.2fr_0.7fr_1fr]
            lg:gap-20

            xl:px-[125px]
          "
        >
          {/* Logo / descrição */}
          <div className="w-full max-w-[360px]">
            <img
              src="/logo2.png"
              alt="JC Pereira Advocacia Criminalista"
              className="
                h-auto
                w-[190px]
                object-contain
              "
            />

            <p
              className="
                mt-8
                max-w-[300px]
                text-sm
                leading-6
                text-zinc-300
              "
            >
              Garantindo os seus direitos com transparência, ética e
              proximidade.
            </p>
          </div>

          {/* Navegação */}
          <div>
            <h3
              className="
                font-panel
                text-lg
                font-normal
                uppercase
                tracking-[-0.03em]
                text-white
              "
            >
              Navegue
            </h3>

            <nav className="mt-5">
              <ul
                className="
                  space-y-3
                  text-sm
                  text-zinc-300
                "
              >
                <li>
                  <a href="#quem-somos" className="transition hover:text-[#EAC449]">
                    Quem somos
                  </a>
                </li>

                <li>
                  <a href="#fundador" className="transition hover:text-[#EAC449]">
                    Sobre
                  </a>
                </li>

                <li>
                  <a href="#fases" className="transition hover:text-[#EAC449]">
                    Fases do processo
                  </a>
                </li>

                <li>
                  <a href="#atendimento" className="transition hover:text-[#EAC449]">
                    Atendimento
                  </a>
                </li>

                <li>
                  <a href="#duvidas" className="transition hover:text-[#EAC449]">
                    FAQ
                  </a>
                </li>

                <li>
                  <a href="#contato" className="transition hover:text-[#EAC449]">
                    Contatos
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Contatos */}
          <div>
            <h3
              className="
                font-panel
                text-lg
                font-normal
                uppercase
                tracking-[-0.03em]
                text-white
              "
            >
              Contatos
            </h3>

            <div className="mt-5 space-y-4">
              {/* Telefone */}
              <a
                href="tel:+5521992117548"
                className="
                  flex
                  items-center
                  gap-3
                  text-sm
                  text-zinc-300
                  transition
                  hover:text-[#EAC449]
                "
              >
                <span
                  className="
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/15
                    text-[#EAC449]
                  "
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.32 1.77.6 2.61a2 2 0 0 1-.45 2.11L8 9.7a16 16 0 0 0 6.3 6.3l1.26-1.26a2 2 0 0 1 2.11-.45c.84.28 1.71.48 2.61.6A2 2 0 0 1 22 16.92Z"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>

                21 99211-7548
              </a>

              {/* Email */}
              <a
                href="mailto:carlos.pereirajuridico@gmail.com"
                className="
                  flex
                  items-center
                  gap-3
                  text-sm
                  text-zinc-300
                  transition
                  hover:text-[#EAC449]
                "
              >
                <span
                  className="
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/15
                    text-[#EAC449]
                  "
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 6h16v12H4V6Z"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4 7l8 6 8-6"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>

                carlos.pereirajuridico@gmail.com
              </a>

              {/* Horário */}
              <div
                className="
                  flex
                  items-start
                  gap-3
                  text-sm
                  leading-6
                  text-zinc-300
                "
              >
                <span
                  className="
                    mt-1
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/15
                    text-[#EAC449]
                  "
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 2v4M16 2v4M3 9h18M5 4h14a2 2 0 0 1 2 2v14H3V6a2 2 0 0 1 2-2Z"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>

                <p>
                  Horário de atendimento
                  <br />
                  Segunda a sexta, das 09h às 18h
                </p>
              </div>

              {/* Sedes */}
              <div
                className="
                  flex
                  items-start
                  gap-3
                  text-sm
                  leading-6
                  text-zinc-300
                "
              >
                <span
                  className="
                    mt-1
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/15
                    text-[#EAC449]
                  "
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11Z"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                      stroke="currentColor"
                      strokeWidth="1.7"
                    />
                  </svg>
                </span>

                <p>
                  Sedes em Itaboraí e Cabo Frio
                  <br />
                  Atendimento em todo o RJ
                </p>
              </div>

              {/* Botão emergência */}
              <div className="pt-2">
                <p
                  className="
                    mb-2
                    text-xs
                    text-zinc-400
                  "
                >
                  Em caso de urgência, ligue:
                </p>

                <a
                  href="https://wa.me/5521992117548"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-[#C83A32]
                    px-5
                    py-3
                    text-sm
                    font-semibold
                    text-white
                    transition
                    hover:bg-[#E0473E]
                  "
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.32 1.77.6 2.61a2 2 0 0 1-.45 2.11L8 9.7a16 16 0 0 0 6.3 6.3l1.26-1.26a2 2 0 0 1 2.11-.45c.84.28 1.71.48 2.61.6A2 2 0 0 1 22 16.92Z"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  21 99211-7548
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Linha inferior */}
        <div
          className="
            mx-auto
            mt-14
            w-full
            max-w-[1920px]
            px-6

            md:px-[60px]

            xl:px-[125px]
          "
        >
          <div
            className="
              border-t
              border-white/10
              pt-6
              text-center
              text-xs
              text-zinc-500
            "
          >
            © {new Date().getFullYear()} JC Pereira Advocacia Criminalista.
            Todos os direitos reservados.
          </div>
        </div>
      </footer>

    </div>
  );
}
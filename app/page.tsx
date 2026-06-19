import Botao1 from "./components/botao1";
import Urgencia from "./components/Urgencia";
import Header from "./components/header";
import Pictures from "./components/pictures";

export default function Home() {
  return (
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

      <main
        className="
          hero-enter
          ml-6
          mr-6
          pt-20
          md:ml-[60px]
          md:mr-10
          md:pt-64
          xl:ml-[125px]
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
            No <strong>JC Pereira Advocacia</strong>, seu caso é acompanhado de
            perto, com transparência e uma defesa comprometida com os seus
            direitos em cada etapa do processo.
          </p>

          <Botao1 className="mt-8" />
          <Urgencia className="mt-4" />
        </div>

        {/* Seção Quem Somos */}
        <section
          className="
            mt-24
            flex
            flex-col
            items-start
            gap-12
            lg:flex-row
            xl:gap-16
          "
        >
          {/* Imagens do lado esquerdo */}
          <Pictures
            className="
              w-full
              max-w-[500px]
              shrink-0
              lg:w-[46%]
              xl:w-[500px]
            "
          />

          {/* Conteúdo do lado direito */}
          <div
          className="
            w-full
            min-w-0
            max-w-[520px]

            lg:ml-12
            lg:w-[520px]
            lg:flex-none

            xl:ml-24
          "
          >
            {/* Texto pequeno superior */}
            <div
              className="
                flex
                items-center
                gap-2
                text-[10px]
                uppercase
                tracking-wider
                text-zinc-400
              "
            >
              <div
                className="h-2.5 w-2.5 shrink-0 rounded-full"
                style={{
                  backgroundColor: "#F7EAE0",
                  border: "3px solid #5B3E30",
                  filter: "blur(1.3px)",
                }}
              />

              <span>SOBRE O ESCRITÓRIO</span>
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
  );
}
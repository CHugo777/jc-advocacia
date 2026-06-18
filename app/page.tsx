import Botao1 from "./components/botao1";
import Urgencia from "./components/Urgencia";
import Header from "./components/header";

export default function Home() {
  return (
    <div
      className="h-[120vh] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/Initial-Background.png')",
      }}
    >
      <Header />

      <main
        className="
          hero-enter
          ml-6 pt-20 md:ml-[125px] md:pt-64 max-w-4xl
        "
      >
        <h1
          className="
            -mt-20
            font-panel
            text-white
            text-4xl
            md:text-5xl
            leading-[1.05]
            tracking-[-0.03em]
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
            md:text-lg
            text-zinc-300
            leading-relaxed
          "
        >
          No <strong>JC Pereira Advocacia</strong>, seu caso é acompanhado de
          perto, com transparência e uma defesa comprometida com os seus direitos
          em cada etapa do processo.
        </p>

        <Botao1 className="mt-8" />
        <Urgencia className="mt-4" />
      </main>
    </div>
  );
}
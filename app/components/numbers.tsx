"use client";

import { useEffect, useRef, useState } from "react";

const dados = [
  {
    numero: 5,
    prefixo: "",
    texto: "ESTRELAS",
  },
  {
    numero: 5,
    prefixo: "+",
    texto: "ANOS DE EXPERIÊNCIA",
  },
  {
    numero: 50,
    prefixo: "+",
    texto: "AVALIAÇÕES",
  },
  {
    numero: 100,
    prefixo: "",
    texto: "PROCESSOS",
  },
];

export default function Numbers() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [comecou, setComecou] = useState(false);
  const [numeros, setNumeros] = useState(dados.map(() => 0));

  useEffect(() => {
    const elemento = containerRef.current;

    if (!elemento) return;

    const observer = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          setComecou(true);
          observer.unobserve(elemento);
        }
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -40px 0px",
      },
    );

    observer.observe(elemento);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!comecou) return;

    const duracao = 1800;
    const inicio = performance.now();
    let animationFrame = 0;

    function animar(tempoAtual: number) {
      const progresso = Math.min((tempoAtual - inicio) / duracao, 1);

      // A animação desacelera quando chega ao valor final
      const progressoSuave = 1 - Math.pow(1 - progresso, 3);

      setNumeros(
        dados.map((item) => Math.floor(item.numero * progressoSuave)),
      );

      if (progresso < 1) {
        animationFrame = requestAnimationFrame(animar);
      } else {
        setNumeros(dados.map((item) => item.numero));
      }
    }

    animationFrame = requestAnimationFrame(animar);

    return () => cancelAnimationFrame(animationFrame);
  }, [comecou]);

  return (
    <div
      ref={containerRef}
      className="
        relative
        z-10
        mx-auto
        w-full
        max-w-[1920px]

        px-6
        pb-20
        pt-8

        md:px-[60px]
        md:pb-24
        md:pt-12

        xl:px-[125px]
      "
    >
      <div
        className="
          grid
          w-full
          grid-cols-2
          items-stretch

          lg:grid-cols-4
        "
      >
        {dados.map((item, index) => {
          const bordasMobile =
            index === 1
              ? "border-l"
              : index === 2
                ? "border-t"
                : index === 3
                  ? "border-l border-t"
                  : "";

          const bordasDesktop =
            index === 0
              ? "lg:border-l-0 lg:border-t-0"
              : "lg:border-l lg:border-t-0";

          return (
            <div
              key={item.texto}
              className={`
                flex
                min-h-[135px]
                w-full
                flex-col
                items-center
                justify-center
                border-white/25
                px-3
                py-6
                text-center

                sm:min-h-[150px]
                sm:px-5

                md:min-h-[165px]

                lg:min-h-[170px]
                lg:px-6
                lg:py-4

                ${bordasMobile}
                ${bordasDesktop}
              `}
            >
              <div
                className="
                  min-w-[100px]
                  font-panel
                  text-5xl
                  font-light
                  leading-none
                  tracking-[-0.04em]
                  text-zinc-200
                  tabular-nums

                  md:text-6xl

                  xl:text-[68px]
                "
              >
                {item.prefixo}
                {numeros[index]}
              </div>

              <p
                className="
                  mt-3
                  whitespace-nowrap
                  text-[10px]
                  font-light
                  uppercase
                  tracking-[0.04em]
                  text-zinc-200

                  sm:text-xs

                  md:text-sm
                "
              >
                {item.texto}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
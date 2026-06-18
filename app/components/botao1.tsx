interface Botao1Props {
  className?: string;
}

export default function Botao1({ className = "" }: Botao1Props) {
  return (
    <a
      href="https://wa.me/5521992117548?text=Olá,%20gostaria%20de%20falar%20com%20um%20advogado."
      target="_blank"
      className={`
        inline-flex
        items-center
        gap-4
        rounded-full
        bg-gradient-to-r
        from-[#FFE696]
        to-[#EAC449]
        px-8
        py-4
        text-black
        font-bold
        uppercase
        tracking-wide
        transition-all
        hover:scale-[1.02]
        ${className}
      `}
    >
      <span
        style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 700,
        }}
      >
        FALE COM UM DOS NOSSOS ADVOGADOS
      </span>

      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 12H19"
          stroke="#000"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M13 6L19 12L13 18"
          stroke="#000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
}
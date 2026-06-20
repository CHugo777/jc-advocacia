interface HeaderProps {
  className?: string;
}

export default function Header({ className = "" }: HeaderProps) {
  return (
    <header
      className={`
        header-enter
        fixed
        left-0
        top-0
        z-50
        hidden
        w-full
        border-b-2
        border-white
        bg-black/44
        backdrop-blur-sm
        md:block
        ${className}
      `}
    >
      {/* Mesmo espaçamento lateral do restante do site */}
      <div
        className="
          mx-auto
          flex
          h-24
          w-full
          max-w-[1920px]
          items-center
          justify-between
          px-6

          md:h-32
          md:px-[60px]

          xl:px-[125px]
        "
      >
        {/* Logo alinhada com o conteúdo da esquerda */}
        <img
          src="/ChatGPT Image 8 de jun. de 2026, 12_29_24-Photoroom 1.png"
          alt="JC Pereira Advocacia"
          className="
            h-16
            w-auto
            shrink-0
            object-contain

            md:h-[120px]
          "
        />

        {/* Menu alinhado com o limite direito */}
        <nav className="hidden md:block">
          <ul
            className="
              flex
              items-center
              gap-4
              whitespace-nowrap
              font-['Inter']
              font-light
              text-white

              md:gap-6

              lg:gap-10
            "
          >
            <li>
              <a
                href="#quem-somos"
                className="
                  text-xs
                  transition-colors
                  duration-300
                  hover:text-zinc-300

                  md:text-sm
                  lg:text-base
                "
              >
                QUEM SOMOS
              </a>
            </li>

            <li>
              <a
                href="#depoimentos"
                className="
                  text-xs
                  transition-colors
                  duration-300
                  hover:text-zinc-300

                  md:text-sm
                  lg:text-base
                "
              >
                DEPOIMENTOS
              </a>
            </li>

            <li>
              <a
                href="#fases"
                className="
                  text-xs
                  transition-colors
                  duration-300
                  hover:text-zinc-300

                  md:text-sm
                  lg:text-base
                "
              >
                FASES DO PROCESSO
              </a>
            </li>

            <li>
              <a
                href="#duvidas"
                className="
                  text-xs
                  transition-colors
                  duration-300
                  hover:text-zinc-300

                  md:text-sm
                  lg:text-base
                "
              >
                DÚVIDAS COMUNS
              </a>
            </li>

            <li>
              <a
                href="#contato"
                className="
                  text-xs
                  transition-colors
                  duration-300
                  hover:text-zinc-300

                  md:text-sm
                  lg:text-base
                "
              >
                CONTATOS
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
interface HeaderProps {
  className?: string;
}

export default function Header({ className = "" }: HeaderProps) {
  const menuItems = [
    {
      label: "QUEM SOMOS",
      href: "#quem-somos",
    },
    {
      label: "FASES DO PROCESSO",
      href: "#fases",
    },
    {
      label: "ATENDIMENTO",
      href: "#atendimento",
    },
    {
      label: "DÚVIDAS COMUNS",
      href: "#duvidas",
    },
    {
      label: "CONTATOS",
      href: "#contato",
    },
  ];

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
        <a href="#" className="shrink-0">
          <img
            src="/ChatGPT Image 8 de jun. de 2026, 12_29_24-Photoroom 1.png"
            alt="JC Pereira Advocacia"
            className="
              h-16
              w-auto
              object-contain

              md:h-[120px]
            "
          />
        </a>

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

              lg:gap-7
              xl:gap-10
            "
          >
            {menuItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="
                    text-[11px]
                    transition-colors
                    duration-300
                    hover:text-zinc-300

                    lg:text-sm
                    xl:text-base
                  "
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
interface HeaderProps {
  className?: string;
}

export default function Header({ className = "" }: HeaderProps) {
  return (
    <header
      className={`
        header-enter
        fixed top-0 left-0 z-50 w-full
        bg-black/44 border-b-2 border-white
        backdrop-blur-sm
        ${className}
      `}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-[125px] h-24 md:h-32 flex items-center justify-between">
        <img
          src="/ChatGPT Image 8 de jun. de 2026, 12_29_24-Photoroom 1.png"
          alt="JC Pereira Advocacia"
          className="h-16 md:h-[120px] w-auto"
        />

        <nav className="hidden md:block">
          <ul className="flex items-center gap-8 lg:gap-12 text-white font-light text-base lg:text-[16px] font-['Inter']">
            <li>
              <a href="#quem-somos" className="hover:text-zinc-300 transition-colors duration-300">
                QUEM SOMOS
              </a>
            </li>

            <li>
              <a href="#depoimentos" className="hover:text-zinc-300 transition-colors duration-300">
                DEPOIMENTOS
              </a>
            </li>

            <li>
              <a href="#fases" className="hover:text-zinc-300 transition-colors duration-300">
                FASES DO PROCESSO
              </a>
            </li>

            <li>
              <a href="#duvidas" className="hover:text-zinc-300 transition-colors duration-300">
                DÚVIDAS COMUNS
              </a>
            </li>

            <li>
              <a href="#contato" className="hover:text-zinc-300 transition-colors duration-300">
                CONTATOS
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
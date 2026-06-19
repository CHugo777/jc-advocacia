interface PicturesProps {
  className?: string;
}

export default function Pictures({ className = "" }: PicturesProps) {
  return (
    <section
  className={`relative w-full max-w-[750px] ${className}`}
>
      {/* Foto do escritório */}
      <img
        src="/office.png"
        alt="Escritório"
        className="w-full rounded-3xl"
      />

      {/* Linha de baixo */}
      <div className="flex justify-between mt-6 gap-4">
        <img
          src="/dr1.png"
          alt="Dr. Pereira"
          className="w-1/2 rounded-3xl"
        />

        <img
          src="/dr2.png"
          alt="Dr. Pereira"
          className="w-1/2 rounded-3xl"
        />
      </div>

      {/* Logo sobreposta */}
      <img
        src="/logo.png"
        alt="Logo"
        className="
          absolute
          left-1/2
          top-[45%]
          -translate-x-1/2
          -translate-y-1/2
          w-40 md:w-52
          z-10
        "
      />
    </section>
  );
}
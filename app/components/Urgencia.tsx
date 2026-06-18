import Image from "next/image";

interface UrgenciaProps {
  className?: string;
}

export default function Urgencia({
  className = "",
}: UrgenciaProps) {
  return (
    <div
      className={`
        flex items-center gap-3
        ${className}
      `}
    >
      <Image
  src="/eclipse.png"
  alt="Indicador"
  width={20}
  height={20}
  className="w-4 h-4 md:w-5 md:h-5"
/>

      <span
        className="
          text-white
          text-[16px]
          md:text-[20px]
          font-light
          leading-none
          ${className}
        "
        style={{
          fontFamily: "Inter, sans-serif",
        }}
      >
        Atendimento 24h em casos de urgência
      </span>
    </div>
  );
}
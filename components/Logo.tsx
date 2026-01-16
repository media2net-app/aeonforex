import Image from "next/image";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src="/logo-wit.png"
        alt="Aeon Forex Logo"
        width={200}
        height={80}
        priority
        className="h-16 md:h-20 w-auto"
      />
    </div>
  );
}

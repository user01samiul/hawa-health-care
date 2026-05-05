import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  className?: string;
};

export default function Logo({ className = "" }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Hawa Health Care home"
      className={`inline-flex items-center ${className}`}
    >
      <Image
        src="/logo/logo-transparent.png"
        alt="Hawa Health Care"
        width={1268}
        height={630}
        priority
        className="h-10 w-auto md:h-11"
      />
    </Link>
  );
}

import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  className?: string;
  imgClassName?: string;
};

export default function Logo({
  className = "",
  imgClassName = "h-14 w-auto md:h-16",
}: LogoProps) {
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
        className={imgClassName}
      />
    </Link>
  );
}

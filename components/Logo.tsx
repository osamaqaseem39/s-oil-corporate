import Link from "next/link";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center shrink-0 ${className}`}
      aria-label="S-OIL Home"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/new/logo.png"
        alt="S-OIL"
        width={140}
        height={56}
        className="h-11 w-auto sm:h-12"
        decoding="async"
      />
    </Link>
  );
}
